var express = require('express');
var router = express.Router();
const db = require("./firebase")
const axios = require('axios');
const { deleteDoc, updateDoc, setDoc, getDocs, collection, doc } = require("firebase/firestore")





router.get('/', async (req, res, next) => {
  try {
    // Make a call to the Spotify API to retrieve the user's top recommedations
    const response = await axios.get(
      'https://api.spotify.com/v1/browse/new-releases',
      {
        headers: {
          Authorization: `Bearer ${req.headers.authorization}`, // Use req.headers.authorization to access the Authorization header value
        },
      }
    );

    // Extract the top recommedations from the API response
    const topRecs = response.data.items;

    // Return the top recommedations as the API response
    res.json({ topRecs });
  } catch (error) {
    console.error('Error retrieving top recommedations:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the top recommedations' });
  }
});





module.exports = router;