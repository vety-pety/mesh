import Route from '@ember/routing/route';

export default Route.extend({
  _subscriptionPlans: null,

  afterModel() {
    return this.get('store')
      .findAll('subscription-plan')
      .then(subscriptionPlans => {
        this.set('_subscriptionPlans', subscriptionPlans.toArray());
    });
  },

  setupController(controller) {
    this._super(...arguments);

    controller.set('subscriptionPlans', this.get('_subscriptionPlans'));
  },
});
