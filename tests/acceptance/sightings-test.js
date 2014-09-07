import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Sightings', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /sightings', function() {
  visit('/sightings');

  andThen(function() {
    ok(find("tr").length > 0, "it has at least one sighting.");
  });
});
