import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  propTypes: {
    createUserTask: PropTypes.any.isRequired,
  },

  newUser: null,

  init() {
    this._super(...arguments);

    this.set('newUser', this.get('store').createRecord('user'));
  },
});
