import { underscore } from '@ember/string';
import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import serializeRelationship from '../utils/jsonapi/relationship-serializer';
// import camelizeKeys from 'shared-logic/utils/camelize-keys';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return underscore(attr);
  },

  keyForRelationship(key) {
    return underscore(key);
  },

  payloadKeyFromModelName(modelName) {
    return pluralize(underscore(modelName));
  },

  serializeHasMany() {
    this._super(...arguments);
    serializeRelationship(this, ...arguments);
  },

  serializeBelongsTo() {
    this._super(...arguments);
    serializeRelationship(this, ...arguments);
  },

  // serializeAttribute(_snapshot, _json, _key, attribute) {
  //   // do not serialize the attribute!
  //   if (attribute.options && attribute.options.readOnly) {
  //     return;
  //   }
  //   this._super(...arguments);
  // },

  // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //   if (payload && payload.hasOwnProperty('meta')) {
  //     payload.meta = camelizeKeys(payload.meta);
  //   }

  //   return this._super(store, primaryModelClass, payload, id, requestType);
  // },
});
