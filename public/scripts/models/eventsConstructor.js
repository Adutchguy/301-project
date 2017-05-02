'use strict';

(function(module) {

  function Event(data) {
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
    this.genre = data.classifications[0].genre.name;
    events.objects.push(this);
  };

  Event.prototype.insertRecord = function(){
    $.post('/project301', {
      artist: this.artist,
      venue: this.venue,
      date: this.date,
      time: this.time,
      address: this.address,
      description: this.description,
      link: this.link,
      image: this.image,
      latitude: this.latitude,
      longitude: this.longitude,
      genre: this.genre
    });
  };

  module.Event = Event;
}(window));
