import axios from 'axios';

var Spotify = require('node-spotify-api');
require('dotenv').config();

export default function handler(req, res) {
    if (req.method == 'GET') {

        var spotify = new Spotify({
            id: process.env.REACT_APP_CLIENT_ID,
            secret: process.env.REACT_APP_CLIENT_SECRET
        });
    
        spotify
            .request('https://api.spotify.com/v1/shows/3q6wJccR9gjQZgOjr23PEJ?market=US')
            .then(function(data) { 
                res.status(200).json({data})
            })
            .catch(function(err) {
                console.log("Error: " + err);
            });   
    }

    else {
        res.status(400);
    }
}