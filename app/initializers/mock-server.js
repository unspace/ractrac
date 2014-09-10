import Pretender from 'pretender';

function parsePostData(query) {
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

var _SIGHTINGS = [
  {id: 1, seenAt: new Date("2014-09-01"), location: "Alleyway", description: "Chubby", height: 30, weight: 9.0},
  {id: 2, seenAt: new Date("2014-09-02"), location: "Trash bin", description: "Smelly", height: 23, weight: 3.5},
  {id: 3, seenAt: new Date("2014-09-03"), location: "Rooftop", description: "Dirty", height: 25, weight: 4.9},
  {id: 4, seenAt: new Date("2014-09-04"), location: "Street", description: "Cocky", height: 28, weight: 4.2},
  {id: 5, seenAt: new Date("2014-09-02"), location: "Alleyway", description: "Creepy", height: 24, weight: 5.5},
  {id: 6, seenAt: new Date("2014-09-03"), location: "Rooftop", description: "Scary", height: 29, weight: 8.1},
  {id: 7, seenAt: new Date("2014-09-01"), location: "Street", description: "Adorable", height: 25, weight: 6.6},
  {id: 8, seenAt: new Date("2014-09-05"), location: "Park", description: "Sticky", height: 23, weight: 7.3},
  {id: 9, seenAt: new Date("2014-09-08"), location: "Beach", description: "Cute", height: 25, weight: 5.2},
];

var LOCALSTORAGE_KEY = "ractrac_sightings";

export default {
  name: 'mock-server',
  initialize: function() {

    var sightingsJson = localStorage.getItem(LOCALSTORAGE_KEY),
        sightings = _SIGHTINGS;

    if (sightingsJson) {
      sightings = JSON.parse(sightingsJson);
    }

    new Pretender(function() {

      this.get('/api/sightings', function() {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({ sightings: sightings })];
      });

      this.get('/api/sightings/:id', function(request) {
        var sighting = sightings.find(function(s) {
          return s.id === parseInt(request.params.id, 10);
        });
        return [200, {"Content-Type": "application/json"}, JSON.stringify(sighting)];
      });

      this.post('/api/sightings', function(request) {
        if (!request.requestBody) {
          return [500, {"Content-Type": "application/json"}, JSON.stringify({error: 'you made me sad'})];
        }
        var data = parsePostData(request.requestBody);

        var maxId = -1;
        sightings.forEach(function(s) {
          if (s.id > maxId) { maxId = s.id; }
        });
        data.id = maxId+1;

        sightings.pushObject(data);
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(sightings));

        return [200, {"Content-Type": "application/json"}, JSON.stringify(data)];
      });

    });
  }
};
