'use strict';

function Event(data) {
  this.venue = data._embedded.venues[0].name;
  this.artist = data._embedded.attractions[0].name;
  this.date = data.dates.start.localDate;
  this.time = data.dates.start.localTime;
  this.address = data._embedded.venues[0].address;
  this.description = data.info;
  this.link = data.url;
  this.image = data.images[0].url;
  events.objects.push(this);
}
