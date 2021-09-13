import DS from 'ember-data';

const { attr, hasMany, Model } = DS;

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  password: attr('string'),
  phone: attr('string'),
  isSubscribed: attr('boolean'),
  animals: hasMany('animal'),
});
