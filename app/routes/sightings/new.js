import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('sighting');
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

