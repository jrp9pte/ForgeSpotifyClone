const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    // Make a call to the Spotify API to retrieve new releases
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer BQDh6UOFGDbTKddSFMs6a7FEHqg33PcW7YkkMXBhtXjGd4GUWYsiyYhqM7TIGwga6UHlD5G4nsemYCwY8J9V_RowM1dYQdJsycVlGbftPD4dFU0XmpMuDJBdeHi21VdmnkXeZ-ZxvT9ki0zDJ744JWRAyIuB2VEX2YtD_ayaLnblTVYlNEdxBlGRmLsTAyA7oX9G3pF8k6ub49po5GMam8dR`,
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
