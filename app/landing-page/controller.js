import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  i18n: service(),
  subscriptionPlans: null,
});
