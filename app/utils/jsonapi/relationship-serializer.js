function serializeRelatedRecord(relationSnapshot, tree) {
  relationSnapshot.adapterOptions = relationSnapshot.adapterOptions || {};
  relationSnapshot.adapterOptions.tree = tree;
  const serialized = relationSnapshot.serialize();

  if (relationSnapshot.id) {
    serialized.data.id = relationSnapshot.id;
  } else {
    if (!serialized.data.attributes) {
      serialized.data.attributes = {};
    }
  }

  if (tree && Object.keys(tree).length === 0) {
    delete serialized.data.relationships;
  }

  return serialized.data;
}

function serializeRelationship(serializer, snapshot, data, rel) {
  let relKind = rel.kind;
  let relKey = rel.key;
  let tree = snapshot.adapterOptions ? snapshot.adapterOptions.tree : null;

  if (data && tree && tree[relKey]) {
    data.relationships = data.relationships || {};
    let key = serializer.keyForRelationship(relKey, relKind, 'serialize');
    data.relationships[key] = data.relationships[key] || {};

    if (relKind === 'belongsTo') {
      let relatedRecord = snapshot.belongsTo(relKey);
      if (relatedRecord) {
        data.relationships[key].data = serializeRelatedRecord(relatedRecord, tree[relKey]);
      }
    } else if (relKind === 'hasMany') {
      let relatedRecords = snapshot.hasMany(relKey);
      if (relatedRecords) {
        data.relationships[key].data = relatedRecords.map(obj => {
          return serializeRelatedRecord(obj, tree[relKey]);
        });
      }
    }
  }
}

export default serializeRelationship;
