import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  MenuItem,
  Select,
  Typography,
  FormControl,
} from "@mui/material";
import axios from "axios";

function MyTopTracks() {
  const API_URL = "http://localhost:9000";
  const [selectedTerm, setSelectedTerm] = useState("long_term");
  const [selectedData, setSelectedData] = useState([]);

  const handleChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/topSongs?time_range=${selectedTerm}`
      );
      setSelectedData(response.data.topSongs);
    } catch (error) {
      console.error("Error retrieving top artists:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedTerm]);

  return (
    <>
      <CssBaseline />
      <div>
        <Container maxWidth="lg">
          <Grid container spacing={4} justify="left">
            <Grid item xs={12}>
              <FormControl>
                <Select
                  labelId="time-range-label"
                  id="time-range-select"
                  value={selectedTerm}
                  onChange={handleChange}
                >
                  <MenuItem value="long_term">Last Year</MenuItem>
                  <MenuItem value="medium_term">Last 6 Months</MenuItem>
                  <MenuItem value="short_term">Last 4 Weeks</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {selectedData.map((track) => (
              <Grid item xs={12} sm={6} md={3} lg={3} key={track.id}>
                <Card style={{ height: "100%" }}>
                  <CardMedia
                    style={{ paddingTop: "56.35%" }}
                    image={track.album.images[0].url}
                    title={track.name}
                  />
                  <CardContent style={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" gutterBottom>
                      {track.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Artist: {track.artists[0].name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Popularity: {track.popularity}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default MyTopTracks;
