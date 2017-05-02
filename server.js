'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');

const requestProxy = require('express-request-proxy');
const bodyParser = require('body-parser');
const request = require('superagent');
const eventsURL = 'https://app.ticketmaster.com/discovery/v2/events.json?size=1&sort=date,name,asc&city=Seattle&classificationName=Music&apikey=aPLdF6GC2G6nLNrygytPbkvPzCU7CjGS';

const PORT = process.env.PORT || 3000;
const app = express();
const conString = process.env.DATABASE_URL + 'project301';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (request,response) => response.sendFile('index.html', {root:'./public'}))

function proxyTicketmaster(request, response) {
  console.log('Routing Ticketmaster request for', request.params[0]);
  (requestProxy({
    url: `https://app.ticketmaster.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.TICKETMASTER_TOKEN}`}
  }))(request, response);
}

app.get('/ticketmaster/*', proxyTicketmaster);
app.post('/project301', loadEvents);

function loadEvents(request, response) {
  console.log('anything');
  console.log(Object.keys(request));
  client.query(
    `INSERT INTO
    project301(artist, venue, date, time, address, description, link, image, latitude, longitude, genre) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
    [request.body.artist, request.body.venue, request.body.date, request.body.time, request.body.address, request.body.description, request.body.link, request.body.image, request.body.latitude, request.body.longitude, request.body.genre]
  )
}

loadDB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    events (
      artist VARCHAR(255),
      venue VARCHAR(255),
      date INT,
      time INT,
      address VARCHAR(255),
      description VARCHAR(255),
      link VARCHAR(255),
      image VARCHAR(255),
      latitude INT,
      longitude INT,
      genre VARCHAR(255)
    );`
  )
  .catch(console.error);
}
