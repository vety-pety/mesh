import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  description: attr('string'),
  price: attr('number'),
  details: attr('string'),
});
