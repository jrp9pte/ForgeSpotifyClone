var express = require('express');
var router = express.Router();
const db = require("./firebase")
const axios = require('axios');
const { deleteDoc, updateDoc, setDoc, getDocs, collection, doc } = require("firebase/firestore")




router.get('/', async (req, res, next) => {
  try {
    // Make a call to the Spotify API to retrieve the user's top songs
    const response = await axios.get(
      'https://api.spotify.com/v1/me/top/tracks?limit=1',
      {
        headers: {
          Authorization: `Bearer ${req.AccessToken}`, // Replace with the user's access token
        },
      }
    );

    // Extract the top songs from the API response
    const topSongs = response.data.items;

    // Return the top songs as the API response
    res.json({ topSongs });
  } catch (error) {
    console.error('Error retrieving top songs:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the top songs' });
  }
});




module.exports = router;