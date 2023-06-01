const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    // Make a call to the Spotify API to retrieve new releases
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/new-releases",
      {
        headers: {
          Authorization: `Bearer BQD-OFEmhN1o7SNRWsCmMXhPB_y7V168WQMrYOUAY1nHS-zM5HspUIl0ZO-ZuSMTeRcLPWVYGgVLmS_sZzoKMjp4K3OGKkLmwDbPI0b6wlfupilQkfe8umK--SYHDxN2QLsGpkLm68ILRkWTIfUwfS9pSx2rc9bbf1Go1PZZM70TgjOk3bZ3T59lwftdAOqiLWzMCCGZxsTZKWueC7ZeOx9QBU_RXWPiRGM`,
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
