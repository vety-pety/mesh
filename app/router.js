import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('landing-page', { path: '/' });
  this.route('register', { path: '/kayit' });
  // this.route('login');

  this.route('animal', { path: '/hayvanlarim', resetNamespace: true }, function() {
    this.route('index', { path: '/' });
    // this.route('new', { path: '/yeni' });
    // this.route('edit', { path: '/:id/duzenle' });
  });
});

export default Router;
