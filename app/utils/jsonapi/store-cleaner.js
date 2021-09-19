import { run } from '@ember/runloop';
import Ember from 'ember';
import buildRelationshipTree from './relationship-tree';

function internalId(record) {
  return record.get(`_internalModel.${Ember.GUID_KEY}`);
}

export default class StoreCleaner {
  constructor(store, record, serializedRelationNames) {
    this.tree = buildRelationshipTree(serializedRelationNames);
    this.store = store;
    this.serializedRelationNames = serializedRelationNames.split(',');
    this.serializedItems = {};
    // if (record.get('isNew')) {
    //   let modelName = record.get('_internalModel.modelName');
    //   this._appendRelatedRecordsArray(modelName);
    //   this.serializedItems[modelName].push(internalId(record));
    // }
    this._findSerializedItems(record.get('_internalModel').createSnapshot(), this.tree);
  }

  clean() {
    run(() => {
      for (let typeName in this.serializedItems) {
        let ids = this.serializedItems[typeName].uniq();
        let recordsToClean = this._findRecordsToClean(typeName, ids);
        recordsToClean.forEach(record => {
          record.unloadRecord();
        });
      }
    });
  }

  _findRecordsToClean(typeName, ids) {
    return this.store.peekAll(typeName).filter(record => {
      let internalModelId = internalId(record);
      return (
        record.get('currentState.stateName') === 'root.loaded.created.uncommitted' &&
        ids.includes(internalModelId)
      );
    });
  }

  _findSerializedItems(snapshot, tree) {
    for (let relationName in tree) {
      let relationship = snapshot.record.relationshipFor(relationName);
      this._appendRelatedRecordsArray(relationship.type);
      let subTree = tree[relationName];

      if (relationship.kind === 'hasMany') {
        this._appendHasManyRecords(snapshot.hasMany(relationName), relationship.type, subTree);
      } else {
        this._appendBelongsToRecord(snapshot.belongsTo(relationName), relationship.type, subTree);
      }
    }
  }

  _appendRelatedRecordsArray(typeName) {
    if (this.serializedItems[typeName] == null) {
      this.serializedItems[typeName] = [];
    }
  }

  _appendHasManyRecords(relatedRecordSnapshots, typeName, subTree) {
    if (relatedRecordSnapshots == null) {
      return;
    }
    let newRecords = relatedRecordSnapshots.filter(relatedRec => relatedRec.record.get('isNew'));
    let ids = newRecords.map(relatedRec => internalId(relatedRec.record));
    this.serializedItems[typeName] = this.serializedItems[typeName].concat(ids);

    relatedRecordSnapshots.forEach(recordSnapshot => {
      this._findSerializedItems(recordSnapshot, subTree);
    });
  }

  _appendBelongsToRecord(relatedRecordSnapshot, typeName, subTree) {
    if (relatedRecordSnapshot == null) {
      return;
    }
    if (relatedRecordSnapshot.record.get('isNew')) {
      let id = internalId(relatedRecordSnapshot.record);
      this.serializedItems[typeName].push(id);
    }
    this._findSerializedItems(relatedRecordSnapshot, subTree);
  }
}
