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
    .then(data => events.fetchAll(data)), err => console.log(err)
  };

  events.requestEvents();

  module.events = events;

})(window);
