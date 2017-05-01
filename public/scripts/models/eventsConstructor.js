'use strict';

(function(module) {
  const eventsConstructor = {};

  eventsConstructor.Event = function(data) {
    this.venue = data._embedded.venues[0].name;
    this.artist = data._embedded.attractions[0].name;
    this.date = data.dates.start.localDate;
    this.time = data.dates.start.localTime;
    this.address = data._embedded.venues[0].address.line1 + ', ' + data._embedded.venues[0].city.name;
    this.description = data.info;
    this.link = data.url;
    this.image = data.images[0].url;
    this.latitude = data._embedded.venues[0].location.latitude;
    this.longitude = data._embedded.venues[0].location.longitude;
    events.objects.push(this);
  };

module.eventsConstructor = eventsConstructor;
}(window))
