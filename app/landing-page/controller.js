import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action, computed } from 'ember-decorators/object';

export default Controller.extend({
  i18n: service(),
  subscriptionPlans: null,

  @action
  onSubscribe(subscriptionId) {
    this.transitionToRoute('register', {
      queryParams: { subscriptionId: subscriptionId },
    });
  },
});
