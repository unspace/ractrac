import Pretender from 'pretender';

var SIGHTINGS = [
  {id: 1, seenAt: new Date("2014-09-01"), location: "Alleyway", description: "Chubby"},
  {id: 2, seenAt: new Date("2014-09-02"), location: "Trash bin", description: "Smelly"},
  {id: 3, seenAt: new Date("2014-09-03"), location: "Rooftop", description: "Dirty"},
  {id: 4, seenAt: new Date("2014-09-04"), location: "Street", description: "Cocky"},
  {id: 5, seenAt: new Date("2014-09-02"), location: "Alleyway", description: "Creepy"},
  {id: 6, seenAt: new Date("2014-09-03"), location: "Rooftop", description: "Scary"},
  {id: 7, seenAt: new Date("2014-09-01"), location: "Street", description: "Adorable"},
  {id: 8, seenAt: new Date("2014-09-05"), location: "Park", description: "Sticky"},
  {id: 9, seenAt: new Date("2014-09-08"), location: "Beach", description: "Cute"},
];

export default {
  name: 'mock-server',
  initialize: function() {
    new Pretender(function() {
      this.get('/api/sightings', function() {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({ sightings: SIGHTINGS })];
      });
    });
  }
};
