import React from "react";
import Users from "./Users";
import TopArtists from "./topArtists";

const Discover = () => {
  return (
    <div>
      <h1>Discover</h1>
      <h2>Users</h2>
      <Users />
      <h2>Top Artists</h2>
      <TopArtists />
    </div>
  );
};

export default Discover;
