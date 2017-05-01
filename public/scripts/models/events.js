'use strict';

(function(module) {
  const events = {};

  events.objects = [];

  events.all = [];

  events.getData = [];

  events.fetchAll = function(data) {
    events.all.map(function(data) {
      let newEvent = new Event(data);
    });
  };

  events.requestEvents = () => {
    $.get('https://app.ticketmaster.com/discovery/v2/events.json?size=2&sort=date,name,asc&city=Seattle&classificationName=Music&apikey=aPLdF6GC2G6nLNrygytPbkvPzCU7CjGS')
    .then(data => events.all = data._embedded.events)
    .then(data => events.fetchAll(data)).then(res => console.log(res)), err => console.log(err)
  };
  events.requestEvents();

  events.venues = [];
  events.artist = [];

  events.getData = events.all.map(data => data._embedded.venues[0].name, data._embedded.attractions[0].name);

  events.requestEvents = (callback) => {
    $.get('https://app.ticketmaster.com/discovery/v2/events.json?size=2&sort=date,name,asc&city=Seattle&classificationName=Music&apikey=aPLdF6GC2G6nLNrygytPbkvPzCU7CjGS')
    .then(data => events.object = data)
    .then(data => events.all = data._embedded.events)
    .then(callback), err => console.log(err)
  };
  events.requestEvents(events.getData);

  module.events = events;

})(window);
