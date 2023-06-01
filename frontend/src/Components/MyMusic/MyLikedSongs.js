import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import axios from "axios";

import {
  CssBaseline,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Login/UserProvider";

function MyLikedSongs() {
  const { user } = useContext(UserContext);
  const API_URL = "http://localhost:9000";
  const [selectedData, setSelectedData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/likedSongs`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      });
      setSelectedData(response.data.likedSongs);
    } catch (error) {
      console.error("Error retrieving top artists:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justify="left">
        {selectedData.map((song) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={song.track.id}>
            <Card style={{ height: "100%" }}>
              <CardMedia
                style={{ paddingTop: "56.35%" }}
                image={song.track.album.images[0].url}
                title={song.track.name}
              />
              <CardContent style={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {song.track.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {song.track.artists[0].name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Popularity: {song.track.popularity}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MyLikedSongs;
