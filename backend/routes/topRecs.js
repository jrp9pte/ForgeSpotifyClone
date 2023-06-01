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
          Authorization: `Bearer BQD1FLE3Er0eWHuIrMMsflUBbhBk6cJIacOuC_eKGI1z-6CSWyk2MokOppSYWRxSXK_EHHIRUAbqLCp0s8LxE2hVrYzCmpeTzbzP59GKl274DP87Vr2MCm9kTeWPzYWiuGzhheVlXGLoirVBtPy1kADFTA6jqwR8gzZ_Z-n6eenpV0FlbnlQU8w6k3-g9OY_FWbEHGNr7_4`,
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
