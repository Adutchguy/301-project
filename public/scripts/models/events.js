'use strict';

(function(module) {
  const events = {};

  events.all = [];

  events.object = '';

  // events.requestEvents = () => {
  //   $.get('/discovery/v2/events.json:size=100&sort=date,name,asc&city=Seattle&classificationName=Music')
  //   .then(data => events.object = data).then(data => events.all = data._embedded.events), err => console.log(err)
  // };
  events.requestEvents = () => {
    $.get('https://app.ticketmaster.com/discovery/v2/events.json?size=300&sort=date,name,asc&city=Seattle&classificationName=Music&apikey=aPLdF6GC2G6nLNrygytPbkvPzCU7CjGS')
    .then(data => events.object = data).then(data => events.all = data._embedded.events), err => console.log(err)
  };
  // events.requestEvents();

  module.events = events;
})(window);
