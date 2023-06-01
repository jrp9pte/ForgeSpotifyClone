const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    // Make a call to the Spotify API to retrieve new releases
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer BQD-OFEmhN1o7SNRWsCmMXhPB_y7V168WQMrYOUAY1nHS-zM5HspUIl0ZO-ZuSMTeRcLPWVYGgVLmS_sZzoKMjp4K3OGKkLmwDbPI0b6wlfupilQkfe8umK--SYHDxN2QLsGpkLm68ILRkWTIfUwfS9pSx2rc9bbf1Go1PZZM70TgjOk3bZ3T59lwftdAOqiLWzMCCGZxsTZKWueC7ZeOx9QBU_RXWPiRGM`,
      },
    });
    console.log(response);
    // Extract the new releases from the API response
    const profile = response.data;

    // Return the new releases as the API response\
    res.json({ profile });
  } catch (error) {
    console.error("Error retrieving new releases:", error);
    res.status(500).json({
      error: "An error occurred while retrieving new releases",
    });
  }
});

module.exports = router;
