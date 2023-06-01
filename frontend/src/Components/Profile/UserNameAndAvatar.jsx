import "./profile.css";
import axios from "axios";
import { Stack, Avatar, Typography, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";

function UserNameAndAvatar() {
  const API_URL = "http://localhost:9000";
  const [selectedData, setSelectedData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/profile`);
      setSelectedData(response.data.profile);
    } catch (error) {
      console.error("Error retrieving top artists:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack direction="row" mb="75px">
      <Avatar
        component={Paper}
        elevation={10}
        id="userAvatar"
        src={selectedData.images?.[0]?.url} // Add optional chaining
      />
      <Stack direction="column" justifyContent="center" alignItems="start">
        <Typography id="profileLabel" variant="h6">
          Profile
        </Typography>
        <Typography id="usernameLabel" variant="h3">
          {selectedData.display_name}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default UserNameAndAvatar;
