import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  propTypes: {
    createPetTask: PropTypes.any.isRequired,
  },

  newAnimal: null,

  init() {
    this._super(...arguments);

    this.set('newAnimal', this.get('store').createRecord('animal'));
  },
});
