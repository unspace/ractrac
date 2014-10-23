import { test, moduleForModel } from 'ember-qunit';
import Sighting from 'ractrac/models/sighting';

moduleForModel('sighting', "Unit: Sighting");

test("calculates BMI properly", function() {
  var sighting = this.subject({height: 25, weight: 4});
  equal(sighting.get('bmi'), 64, "it calculates BMI correctly");
});
