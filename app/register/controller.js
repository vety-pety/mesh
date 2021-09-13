import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { task } from 'ember-concurrency';
import { action, computed } from 'ember-decorators/object';
import { equal } from '@ember/object/computed';

export default Controller.extend({
  i18n: service(),
  selectedSubscriptionPlan: alias('model'),

  queryParams: {
    subscriptionId: 'paket',
  },

  user: null,
  pet: null,

  _currentStep: 0,

  createUserTask: task(function*(attributes) {
    // create user here
  }),

  createPetTask: task(function*(attributes) {
    // create pet here
  }),

  makePaymentAndSaveTask: task(function*(attributes) {
    // create pet here
  }),

  @action
  nextStep() {
    this.incrementProperty('_currentStep');
  },
});
