import "./profile.css";
import { Stack, IconButton, Typography, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Settings from "./Settings";
import UserNameAndAvatar from "./UserNameAndAvatar";
import MyTopTracks from "../MyMusic/MyTopTracks";
import MyLikedSongs from "../MyMusic/MyLikedSongs";
import MyTopArtists from "../MyMusic/MyTopArtists";
import axios from "axios";
import React, { useState, useEffect, useContext, useReducer } from "react";
import { UserContext } from "../Login/UserProvider";

function Profile() {
  const { user } = useContext(UserContext);
  const API_URL = "http://localhost:9000";
  const [selectedData, setSelectedData] = useState([]);
  console.log(user);
  console.log("what");
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      });
      setSelectedData(response.data.profile);
    } catch (error) {
      console.error("Error retrieving top artists:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const initialState = {
    showSettings: false,
    isPrivate: false,
    showTopSongs: true,
    showLikedSongs: true,
    showTopArtists: true,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleShowSettings":
        return { ...state, showSettings: !state.showSettings };
      case "toggleIsPrivate":
        return { ...state, isPrivate: !state.isPrivate };
      case "toggleShowTopSongs":
        return { ...state, showTopSongs: !state.showTopSongs };
      case "toggleShowLikedSongs":
        return { ...state, showLikedSongs: !state.showLikedSongs };
      case "toggleShowTopArtists":
        return { ...state, showTopArtists: !state.showTopArtists };
      default:
        return { ...state };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Box id="banner">
        <Stack direction="row" justifyContent="flex-end">
          <IconButton
            id="settingsButton"
            aria-label="settings"
            size="large"
            onClick={() => dispatch({ type: "toggleShowSettings" })}
          >
            <SettingsIcon fontSize="inherit" />
          </IconButton>
        </Stack>
        <UserNameAndAvatar />
      </Box>
      <Settings state={state} dispatch={(obj) => dispatch(obj)} />
      {state.showTopArtists || state.showTopSongs || state.showLikedSongs ? (
        <h1>{selectedData.display_name}'s Music</h1>
      ) : (
        <h1>{selectedData.display_name}'s Music is Hidden</h1>
      )}
      {state.showTopArtists && (
        <>
          <h2>My Top 8 Artists</h2>

          <MyTopArtists />
        </>
      )}
      {state.showTopSongs && (
        <>
          <h2>My Top 8 Tracks</h2>
          <MyTopTracks />
        </>
      )}
      {state.showLikedSongs && (
        <>
          <h2>My 8 Most Recent Liked Songs</h2>
          <MyLikedSongs />
        </>
      )}
    </>
  );
}

export default Profile;
