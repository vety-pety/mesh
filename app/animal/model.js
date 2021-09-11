import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  indexRoute: 'animal.index',

  user: belongsTo('user'), 

  name: attr('string'),
  age: attr('number'),
  species: attr('string'),
});
