import { isEmpty } from '@ember/utils';

function appendRelation(relations, fullRelationName) {
  let relationName = fullRelationName;
  let childRelations = null;

  let indexOfDot = fullRelationName.indexOf('.');
  if (indexOfDot >= 0) {
    relationName = fullRelationName.substring(0, indexOfDot);
    childRelations = fullRelationName.substring(indexOfDot + 1);
  }
  if (relations[relationName] == null) {
    relations[relationName] = buildRelationshipTree(childRelations);
  } else {
    appendRelation(relations[relationName], childRelations);
  }
}

function buildRelationshipTree(serializedRelationNames) {
  let relations = {};

  if (isEmpty(serializedRelationNames)) {
    return relations;
  }
  let relationNamesArr = serializedRelationNames.split(',');
  relationNamesArr.forEach(relationName => {
    appendRelation(relations, relationName);
  });

  return relations;
}

export default buildRelationshipTree;
