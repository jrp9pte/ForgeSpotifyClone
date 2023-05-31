import React from "react";
import MyTopArtists from "./MyTopArtists";
import MyLikedSongs from "./MyLikedSongs";
import MyTopTracks from "./MyTopTracks";

const MyMusic = () => {
  return (
    <div>
      <h1>My Music</h1>
      <h2>My Top Artists</h2>
      <MyTopArtists />
      <h2>My Top Tracks</h2>
      <MyTopTracks />
    </div>
  );
};

export default MyMusic;
