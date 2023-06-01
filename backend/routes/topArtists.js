var express = require("express");
var router = express.Router();
const db = require("./firebase");
const axios = require("axios");
const {
  deleteDoc,
  updateDoc,
  setDoc,
  getDocs,
  collection,
  doc,
} = require("firebase/firestore");

router.get("/", async (req, res, next) => {
  try {
    // Get the time range value from the request query parameters
    const timeRange = req.query.time_range || "medium_term"; // Default to medium_term if not provided
    const access_token = req.headers.authorization.split(" ")[1];

    // Make a call to the Spotify API to retrieve the user's top artists with the selected time range
    const response = await axios.get(
      `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=8`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    // Extract the top artists from the API response
    const topArtists = response.data.items;

    // Return the top artists as the API response
    res.json({ topArtists });
  } catch (error) {
    console.error("Error retrieving top artists:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the top artists" });
  }
});


module.exports = router;
