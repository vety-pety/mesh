import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  type: attr('string'),
  quantity: attr('number'),
  subscription: belongsTo('subscription'),
});
