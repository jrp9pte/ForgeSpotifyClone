import {
  Divider,
  Dialog,
  List,
  ListItem,
  Switch,
  Typography,
  Stack,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Login/UserProvider";

const switchStyle = {
  borderRadius: 2,
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#BB623E",
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: "#D79F88",
  },
};

const Settings = ({ state, dispatch }) => {
  const {
    showSettings,
    isPrivate,
    showTopSongs,
    showLikedSongs,
    showTopArtists,
  } = state;
  const { user } = useContext(UserContext);

  console.log("showTopSongs", showTopSongs);

  const API_URL = "http://localhost:9000";
  const [selectedData, setSelectedData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setSelectedData(response.data.result);
    } catch (error) {
      console.error("Error retrieving users:", error);
    }
  };

  const updateUser = async (updatedUserData) => {
    try {
      const response = await axios.put(`${API_URL}/users/${user.docid}`, {
        public: updatedUserData.public,
      });
      console.log("User updated:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    selectedData.forEach((user) => {
      const updatedUserData = {
        public: !isPrivate,
      };
      updateUser(updatedUserData);
    });
  }, [isPrivate]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Dialog
      onClose={() => dispatch({ type: "toggleShowSettings" })}
      open={showSettings}
      maxWidth="lg"
      fullWidth
    >
      <Typography variant="h3" id="settingsLabel">
        Settings
      </Typography>
      <List>
        <ListItem>
          <Stack
            id="setting"
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h5">Private Profile</Typography>
            <Switch
              sx={switchStyle}
              checked={isPrivate}
              onChange={() => dispatch({ type: "toggleIsPrivate" })}
            />
          </Stack>
        </ListItem>
        <Divider variant="middle" id="settingsDivider" />
        <ListItem>
          <Stack
            id="setting"
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h5">Display Top Artists</Typography>
            <Switch
              sx={switchStyle}
              checked={showTopArtists}
              onChange={() => dispatch({ type: "toggleShowTopArtists" })}
            />
          </Stack>
        </ListItem>
        <Divider variant="middle" id="settingsDivider" />
        <ListItem>
          <Stack
            id="setting"
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h5">Display Top Songs</Typography>
            <Switch
              sx={switchStyle}
              checked={showTopSongs}
              onChange={() => dispatch({ type: "toggleShowTopSongs" })}
            />
          </Stack>
        </ListItem>
        <Divider variant="middle" id="settingsDivider" />
        <ListItem>
          <Stack
            id="setting"
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h5">Display Liked Songs</Typography>
            <Switch
              sx={switchStyle}
              checked={showLikedSongs}
              onChange={() => dispatch({ type: "toggleShowLikedSongs" })}
            />
          </Stack>
        </ListItem>
      </List>
      <div style={{ height: "250px", overflow: "auto" }}>
        {selectedData.map((user, index) => (
          <div key={index}>
            <Typography>{user.username || user.email}</Typography>
            <Typography>{user.public ? "Public" : "Private"}</Typography>
          </div>
        ))}
      </div>
    </Dialog>
  );
};

export default Settings;
