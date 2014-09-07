import Ember from 'ember';
import Sighting from 'ractrac/models/sighting';

export default Ember.Route.extend({
  model: function() {
    return Sighting.create();
  },

  actions: {
    save: function(model) {
      var self = this;
      model.save().then(function() {
        self.transitionTo('sightings.show', model);
      }, function(error){
        console.log(error);
      });
    }
  }

});

