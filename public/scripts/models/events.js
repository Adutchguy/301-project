'use strict';

(function(module) {
  const events = {};

  events.objects = [];

  events.all = [];

  events.getData = [];

  events.fetchAll = data => events.all.map(function(data){
    let newEvent = new eventsConstructor.Event(data)
  });

  events.requestEvents = (callback) => {
    console.log('test 3');
    $.get('https://app.ticketmaster.com/discovery/v2/events.json?size=1&sort=date,name,asc&city=Seattle&classificationName=Music&apikey=aPLdF6GC2G6nLNrygytPbkvPzCU7CjGS')
    .then(data => events.all = data._embedded.events)
    .then(data => {
      console.log(data);
      events.fetchAll(data);
    })
    .then(callback), err => console.log(err)
  };

  module.events = events;
})(window);
