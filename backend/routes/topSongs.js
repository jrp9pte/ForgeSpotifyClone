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
    const timeRange = req.query.time_range || "medium_term"; // Default to medium_term if not provided
    // Make a call to the Spotify API to retrieve the user's top songs
    const response = await axios.get(
      `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=8`,
      {
        headers: {
          Authorization: `Bearer BQBA0087MKJb93Y98qBr3-i5ojxpsbJmr9teQ6ToF39R6Qr9rIWBw8F1qAfmOs2jWIYxdHfKCCcjVfsUBiPIWJVdY6L0NsQoJ4VWrMunb3e8dYmDgLyjMyUwNiJ2W34jvwhcWWT1lC0Gvl6DKkPDDAQKaUpTePpxHtn7Y_7AkptqLURRgYDtDHHCgYe1SfQap3y-_lZt16mHWcIv8BavGGqcEDxRqaWQ0Q4`,
        },
      }
    );

    // Extract the top songs from the API response
    const topSongs = response.data.items;

    // Return the top songs as the API response
    res.json({ topSongs });
  } catch (error) {
    console.error("Error retrieving top songs:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the top songs" });
  }
});

module.exports = router;
