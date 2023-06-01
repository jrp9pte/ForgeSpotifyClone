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
          Authorization: `Bearer BQD-OFEmhN1o7SNRWsCmMXhPB_y7V168WQMrYOUAY1nHS-zM5HspUIl0ZO-ZuSMTeRcLPWVYGgVLmS_sZzoKMjp4K3OGKkLmwDbPI0b6wlfupilQkfe8umK--SYHDxN2QLsGpkLm68ILRkWTIfUwfS9pSx2rc9bbf1Go1PZZM70TgjOk3bZ3T59lwftdAOqiLWzMCCGZxsTZKWueC7ZeOx9QBU_RXWPiRGM`,
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
