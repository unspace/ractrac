import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('overview');
  this.resource('sightings', function() {
    this.route('show', {path: '/:sighting_id'});
  });
});

export default Router;
