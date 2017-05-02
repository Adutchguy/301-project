'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');

const redis = require('redis');
const requestProxy = require('express-request-proxy');
require('redis-streams')(redis);

const PORT = process.env.PORT || 3000;
const app = express();
const conString = process.env.DATABASE_URL + 'project301';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(express.static('./public'));

app.get('/', (request,response) => response.sendFile('index.html', {root:'./public'}))

function proxyTicketmaster(request, response) {
  console.log('Routing Ticketmaster request for', request.params[0]);
  (requestProxy({
    url: `https://app.ticketmaster.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.TICKETMASTER_TOKEN}`}
  }))(request, response);
}

app.get('/ticketmaster/*', proxyTicketmaster);

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
      genre VARCHAR(255),
      category VARCHAR(255)
    );`
  )
  .catch(console.error);
}
