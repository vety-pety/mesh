import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from 'ember-decorators/object';

export default Controller.extend({
  session: service(),
 
  @action
  invalidateSession() {
    this.get('session.invalidate')();
  },
});
