import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import { computed, action } from 'ember-decorators/object';
import { task } from 'ember-concurrency';

export default Component.extend({
  propTypes: {
    selectedSubscriptionPlan: PropTypes.EmberObject.isRequired,
    makePaymentAndSaveTask: PropTypes.any.isRequired,
    currentStep: PropTypes.number.isRequired,
    onContinue: PropTypes.func.isRequired,
  },

  continueTask: task(function*() {
    if (this.get('currentStep') >= 2) {
      yield this.get('makePaymentAndSaveTask').perform();
    }
    this.get('onContinue')();
  }),

  @computed('currentStep')
  getButtonName(currentStep) {
    if (currentStep >= 2) {
      return 'Make Payment';
    } else {
      return 'Next';
    }
  },
});
