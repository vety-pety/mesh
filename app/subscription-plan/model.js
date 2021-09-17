import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  description: attr('string'),
  price: attr('number'),
  details: attr(),

  makePayment(id, data = {}) {
    const adapter = this.get('store').adapterFor('subscription-plan');

    return adapter.makePayment(id, {
      data: data,
    });
  },
});
