const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    // Make a call to the Spotify API to retrieve liked songs
    const response = await axios.get("https://api.spotify.com/v1/me/tracks", {
      headers: {
        Authorization: `Bearer BQBA0087MKJb93Y98qBr3-i5ojxpsbJmr9teQ6ToF39R6Qr9rIWBw8F1qAfmOs2jWIYxdHfKCCcjVfsUBiPIWJVdY6L0NsQoJ4VWrMunb3e8dYmDgLyjMyUwNiJ2W34jvwhcWWT1lC0Gvl6DKkPDDAQKaUpTePpxHtn7Y_7AkptqLURRgYDtDHHCgYe1SfQap3y-_lZt16mHWcIv8BavGGqcEDxRqaWQ0Q4`,
      },
      params: {
        limit: 8,
      },
    });

    // Extract the liked songs from the API response
    const likedSongs = response.data.items;

    // Return the liked songs as the API response
    res.json({ likedSongs });
  } catch (error) {
    console.error("Error retrieving liked songs:", error);
    res.status(500).json({
      error: "An error occurred while retrieving liked songs",
    });
  }
});

module.exports = router;
