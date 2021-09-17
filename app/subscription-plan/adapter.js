import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  makePayment(id, data) {
    return this.ajax(`subscription_plans/${id}/make_payment`, 'POST', { data: data });
  },
});
