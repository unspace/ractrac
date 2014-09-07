import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.ajax("/api/sightings");
  }
});

