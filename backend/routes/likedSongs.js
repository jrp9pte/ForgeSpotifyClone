const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const access_token = req.headers.authorization.split(" ")[1];

    // Make a call to the Spotify API to retrieve liked songs
    const response = await axios.get("https://api.spotify.com/v1/me/tracks", {
      headers: {
        Authorization: `Bearer ${access_token}`,
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
