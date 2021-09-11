import { underscore } from '@ember/string';
import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
  pathForType: function(modelName) {
    return pluralize(underscore(modelName));
  },
});
