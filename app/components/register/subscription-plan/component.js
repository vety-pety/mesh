import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';

export default Component.extend({
  propTypes: {
    selectedSubscriptionPlan: PropTypes.EmberObject.isRequired,
    onContinue: PropTypes.func.isRequired,
  },
});
