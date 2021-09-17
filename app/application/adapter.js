import { underscore } from '@ember/string';
import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import { getOwner } from '@ember/application';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend({
  session: service(),

  pathForType: function(modelName) {
    return pluralize(underscore(modelName));
  },

  // ajax(_url, _type, _options) {
  //   const _super = this._super.bind(this);
  //   let args = arguments;

  //   const session = this.get('session');
  //   let tokenExpiresAt = session.get('data.authenticated.expires_at');
  //   let refreshToken = session.get('data.authenticated.refresh_token');
  //   let now = new Date().getTime();

  //   if (now > tokenExpiresAt) {
  //     const authenticator = getOwner(this).lookup(session.get('data.authenticated.authenticator'));
  //     return authenticator._refreshAccessToken(tokenExpiresAt, refreshToken).then(() => {
  //       return _super(...args);
  //     });
  //   } else {
  //     return _super(...args);
  //   }
  // },

  // @computed('session.{data.authenticated.access_token,isAuthenticated}')
  // headers() {
  //   let headers = {};
  //   if (this.session.isAuthenticated) {
  //     // OAuth 2
  //     headers['Authorization'] = `Bearer ${this.session.data.authenticated.access_token}`;
  //   }

  //   return headers;
  // }
});
