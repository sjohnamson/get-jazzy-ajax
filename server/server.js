const express = require('express');
const artistListArray = require('./modules/artist')
const songListArray = require('./modules/song')
const albumListArray = require('./modules/albums')

const app = express();
const PORT = 5000;





app.use(express.static('server/public'));

// using express to add GET route /artist to sending artistListArray
app.get('/artist', (req, res) => {
    res.send(artistListArray);
    console.log('in artist')
});

// Add GET for songs
app.get('/song', (req, res) => {

    res.send(songListArray);
    console.log('in song get')
  
});

// Add GET for albums
app.get('/albums', (req, res) => {

    res.send(albumListArray);
    console.log('in album get')
  
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});