const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const access_token = req.headers.authorization.split(" ")[1];

    // Make a call to the Spotify API to retrieve new releases
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/new-releases",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        params: {
          limit: 8,
        },
      }
    );

    // Extract the new releases from the API response
    const newReleases = response.data.albums.items;

    // Return the new releases as the API response
    res.json({ newReleases });
  } catch (error) {
    console.error("Error retrieving new releases:", error);
    res.status(500).json({
      error: "An error occurred while retrieving new releases",
    });
  }
});

module.exports = router;
