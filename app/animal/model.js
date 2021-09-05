import DS from 'ember-data';

// belongsTo
const { attr, Model } = DS;

export default Model.extend({
  indexRoute: 'animal.index',

  // after adding user model uncomment here
  // user: belongsTo('user'), 

  name: attr('string'),
  age: attr('number'),
  species: attr('string'),
});
