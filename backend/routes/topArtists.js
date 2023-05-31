var express = require('express');
var router = express.Router();
const db = require("./firebase")
const axios = require('axios');
const  {deleteDoc, updateDoc, setDoc, getDocs, collection, doc} = require("firebase/firestore")




router.get('/topArtists', async (req, res, next) => {
    try {
      // Make a call to the Spotify API to retrieve the user's top artists
      const response = await axios.get(
        'https://api.spotify.com/v1/me/top/artists?limit=1',
        {
          headers: {
            Authorization: `Bearer ${req.AccessToken}`, // Replace with the user's access token
          },
        }
      );
  
      // Extract the top artists from the API response
      const topArtist = response.data.items;
  
      // Return the top artist as the API response
      res.json({ topArtist });
    } catch (error) {
      console.error('Error retrieving top artist:', error);
      res.status(500).json({ error: 'An error occurred while retrieving the top artist' });
    }
  });




  module.exports = router;