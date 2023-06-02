import React from "react";
import Users from "./Users";
import TopArtists from "./topArtists";
import NewReleases from "./newReleases";
import Discussion from "../Discussion/Discussion";

const Discover = () => {
  return (
    <div>
      <h1>Discover</h1>
      <h2>Users</h2>
      <Users />
      <h2>New Releases</h2>
      <NewReleases />
     <h2>Connect with Others</h2>
      <Discussion />
    </div>
  );
};

export default Discover;
