const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const access_token = req.headers.authorization.split(" ")[1];
    // Make a call to the Spotify API to retrieve the user profile
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // Extract the user profile from the API response
    const profile = response.data;

    // Return the user profile as the API response
    res.json({ profile });
  } catch (error) {
    console.error("Error retrieving user profile:", error);
    res.status(500).json({
      error: "An error occurred while retrieving the user profile",
    });
  }
});

module.exports = router;
