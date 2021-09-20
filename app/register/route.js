import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').find('subscription-plan', params.subscriptionId);
  },

  resetController() {
    this.set('controller.errorList', []);
    this.set('controller._currentStep', 0);
    this.set('controller.selectedSubscriptionPlan', null);
  },
});
