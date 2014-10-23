import DS from 'ember-data';

export default DS.Model.extend({
  seenAt: DS.attr('date'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  height: DS.attr('number'),
  weight: DS.attr('number'),

  bmi: function() {
    var heightM = this.get('height') / 100.0;
    return this.get('weight') / (heightM * heightM);
  }.property('weight', 'height')
});
