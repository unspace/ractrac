import Sighting from 'ractrac/models/sighting';

module("Unit: Sighting");

test("calculates BMI properly", function() {
  var sighting = Sighting.create({height: 25, weight: 4});
  equal(sighting.get('bmi'), 64, "it calculates BMI correctly");
});
