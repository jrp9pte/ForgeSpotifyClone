import React from "react";
import Users from "./Users";
import TopArtists from "./topArtists";
import NewReleases from "./newReleases";
const Discover = () => {
  return (
    <div>
      <h1>Discover</h1>
      <h2>Users</h2>
      <Users />
      <h2>New Releases</h2>
      <NewReleases />
    </div>
  );
};

export default Discover;
