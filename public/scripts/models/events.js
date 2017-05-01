'use strict';

(function(module) {
  const events = {};

  events.all = [];

  events.object = '';

  events.venues = [];
  events.artist = [];
  // events.requestEvents = () => {
  //   $.get('/discovery/v2/events.json:size=100&sort=date,name,asc&city=Seattle&classificationName=Music')
  //   .then(data => events.object = data).then(data => events.all = data._embedded.events), err => console.log(err)
  // };
  events.getData = events.all.map(data => data._embedded.venues[0].name, data._embedded.attractions[0].name);

  events.requestEvents = (callback) => {
    $.get('https://app.ticketmaster.com/discovery/v2/events.json?size=2&sort=date,name,asc&city=Seattle&classificationName=Music&apikey=aPLdF6GC2G6nLNrygytPbkvPzCU7CjGS')
    .then(data => events.object = data)
    .then(data => events.all = data._embedded.events)
    .then(callback), err => console.log(err)
  };
  events.requestEvents(events.getData);

  // events.getData = () => {
  //   events.venues = events.all.map(data => data._embedded.venues[0].name);
  //   events.artist = events.all.map(data => data._embedded.attractions[0].name);
  // }


  module.events = events;

})(window);
