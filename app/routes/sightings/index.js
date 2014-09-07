import Ember from 'ember';
import Sighting from 'ractrac/models/sighting';

export default Ember.Route.extend({
  model: function() {
    return Sighting.findAll();
  }
});

