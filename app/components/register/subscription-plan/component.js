import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import { computed } from 'ember-decorators/object';
import { task } from 'ember-concurrency';

export default Component.extend({
  propTypes: {
    selectedSubscriptionPlan: PropTypes.EmberObject.isRequired,
    makePaymentAndSaveTask: PropTypes.any.isRequired,
    currentStep: PropTypes.number.isRequired,
    onContinue: PropTypes.func.isRequired,
  },

  onContinue: task(function*() {
    if (this.get('currentStep') >= 2) {
      this.get('makePaymentAndSaveTask').peform();
    }
    this.get('onContinue');
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
