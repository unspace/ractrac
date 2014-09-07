/* global moment:true */
import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(dt) {
  return moment(dt).fromNow();
});
