import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from 'ember-decorators/object';

export default Controller.extend({
  errorMessage: null,
  session: service(),

  identification: null,
  password: null,

  @action
  authenticate(e) {
    e.preventDefault();
    try {
      this.get('session').authenticate(
        'authenticator:oauth2',
        this.get('identification'),
        this.get('password')
      );
    } catch (error) {
      this.set('errorMessage', error.error || error);
    }

    if (this.get('session').isAuthenticated) {
      this.transitionToRoute('landing-page');
    }
  },

  @action
  updateIdentification(e) {
    this.set('identification', e.target.value);
  },

  @action
  updatePassword(e) {
    this.set('password', e.target.value);
  },
});
