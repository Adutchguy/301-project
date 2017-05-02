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
    $.get('https://app.ticketmaster.com/discovery/v2/events.json?size=2&sort=date,name,asc&city=Seattle&classificationName=Music&apikey=aPLdF6GC2G6nLNrygytPbkvPzCU7CjGS')
    .then(data => events.all = data._embedded.events)
    .then(data => {
      console.log(data);
      events.fetchAll(data);
    })
    .then(callback), err => console.log(err)
  };

  events.prototype.insertRecord = function(callback) {
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
      })
    .then(console.log)
    .then(callback);
  };

//   events.prototype.deleteRecord = function(callback) {
//   $.ajax({
//     url: `/articles/${this.article_id}`,
//     method: 'DELETE'
//   })
//   .then(console.log)
//   .then(callback);
// };
//
// events.prototype.updateRecord = function(callback) {
//   $.ajax({
//     url: `/articles/${this.article_id}`,
//     method: 'DELETE',
//     data: {
//       author: this.author,
//       authorUrl: this.authorUrl,
//       body: this.body,
//       category: this.category,
//       publishedOn: this.publishedOn,
//       title: this.title,
//       author_id: this.author_id
//     }
//   })
//   .then(console.log)
//   .then(callback);
// };
  module.events = events;
})(window);
