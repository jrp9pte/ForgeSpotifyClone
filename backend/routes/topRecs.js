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
          Authorization: `Bearer BQBA0087MKJb93Y98qBr3-i5ojxpsbJmr9teQ6ToF39R6Qr9rIWBw8F1qAfmOs2jWIYxdHfKCCcjVfsUBiPIWJVdY6L0NsQoJ4VWrMunb3e8dYmDgLyjMyUwNiJ2W34jvwhcWWT1lC0Gvl6DKkPDDAQKaUpTePpxHtn7Y_7AkptqLURRgYDtDHHCgYe1SfQap3y-_lZt16mHWcIv8BavGGqcEDxRqaWQ0Q4`,
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
