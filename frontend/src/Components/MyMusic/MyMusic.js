import React, { useState,useEffect } from "react";
import MyTopArtists from "./MyTopArtists";
import MyLikedSongs from "./MyLikedSongs";
import MyTopTracks from "./MyTopTracks";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
const MyMusic = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  useEffect(()=>{
		if (!window.localStorage.getItem("currentUserAT") || !window.localStorage.getItem("currentUserUID")){
			window.location.href="http://localhost:3000"
		}
	})
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div>
      <h1>My Music</h1>

      <h2>My Top 8 Artists</h2>
      <MyTopArtists />
      <div>
        <br></br>
        <Button onClick={toggleDialog}>What is Popularity?</Button>
        <Dialog open={isDialogOpen} onClose={toggleDialog}>
          <DialogTitle>What is Popularity?</DialogTitle>
          <DialogContent>
            <p>
              The popularity of a track/ artist is a value between 0 and 100,
              with 100 being the most popular. The popularity is calculated by
              algorithm and is based, in the most part, on the total number of
              plays the track has had and how recent those plays are. Generally
              speaking, songs that are being played a lot now will have a higher
              popularity than songs that were played a lot in the past.
              Duplicate tracks (e.g. the same track from a single and an album)
              are rated independently. Artist and album popularity is derived
              mathematically from track popularity
            </p>
          </DialogContent>
          <Button onClick={toggleDialog}>Close</Button>
        </Dialog>
      </div>
      <h2>My Top 8 Tracks</h2>
      <MyTopTracks />
      <h2>My 8 Most Recent Liked Songs</h2>
      <MyLikedSongs />
    </div>
  );
};

export default MyMusic;
