'use strict';

var clear = require('clear');
clear();

const pg = require('pg');
const fs = require('fs');
const express = require('express');

const requestProxy = require('express-request-proxy');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();
const conString = DATABASE_URL + 'd84fv509f49qbg';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (request,response) => response.sendFile('index.html', {root:'./public'}))
app.get('/db', (request, response) => {
  client.query(`
    SELECT artist, venue, date, time, address, description, link, image, genre FROM project301 WHERE artist IS NOT NULL`
  )
  .then(result => response.send(result.rows))
  .catch(console.error);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    project301 (
      artist VARCHAR(255) UNIQUE,
      venue VARCHAR(255),
      date DATE,
      time TIME,
      address VARCHAR(255),
      description VARCHAR,
      link VARCHAR NOT NULL,
      image VARCHAR(255),
      latitude DECIMAL,
      longitude DECIMAL,
      genre VARCHAR(255)
    );`
  )
  .catch(console.error);
}
loadDB();


function loadEvents(request, response) {
  client.query(
        `INSERT INTO
        project301(artist, venue, date, time, address, description, link, image, latitude, longitude, genre) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) ON CONFLICT DO NOTHING`,
        [request.body.artist, request.body.venue, request.body.date, request.body.time, request.body.address, request.body.description, request.body.link, request.body.image, request.body.latitude, request.body.longitude, request.body.genre]
      ).then(() => response.send('Update Complete'))
      .catch(console.error);
}
app.post('/project301', loadEvents)
