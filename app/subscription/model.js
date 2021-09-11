import DS from 'ember-data';

const { attr, hasMany, belongsTo, Model } = DS;

export default Model.extend({
  subscribedUntil: attr('date-only'),
  details: hasMany('subscription-detail'),

  animal: belongsTo('animal'),
});
