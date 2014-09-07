/* global $:true */

import Ember from 'ember';

var Sighting = Ember.Object.extend({
  bmi: function() {
    var heightM = this.get('height') / 100.0;
    return this.get('weight') / (heightM * heightM);
  }.property('weight', 'height')
});

Sighting.reopenClass({
  findAll: function() {
    return $.ajax('/api/sightings').then(function(result) {
      result.sightings = result.sightings.map(function(s) {
        return Sighting.create(s);
      });
      return result;
    });
  }
});

export default Sighting;
