const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    console.log("req", req)
    // Make a call to the Spotify API to retrieve new releases
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer BQAA5Y-M-1w1m0nC3VPWNERAQvU3ki_vu1T4_9c7l0jClFeQg3suN42r5eSSJOoqQUCxyicKl-iFcMr0DaJSD9V_SNwynxsbtAeRugcqYgfwVebUWQNG93tTk4uvXXQkBY9JZUusayBQullZ_9lPQgJBZter549Xtu2WRhAoCu5QX2SgDnPxW1FyZ4H_Y1mKiWemNDsQMtO3sA`,
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
