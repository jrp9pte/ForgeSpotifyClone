import React from "react";
import MyTopArtists from "./MyTopArtists";
import MyLikedSongs from "./MyLikedSongs";
import MyTopTracks from "./MyTopTracks";

const MyMusic = () => {
  return (
    <div>
      <h1>My Music</h1>
      <h2>My Top 8 Artists</h2>
      <MyTopArtists />
      <h2>My Top 8 Tracks</h2>
      <MyTopTracks />
      <h2>My 8 Most Recent Liked Songs</h2>
      <MyLikedSongs />
    </div>
  );
};

export default MyMusic;
