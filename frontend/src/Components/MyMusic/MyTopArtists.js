import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CssBaseline,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

function MyTopArtists() {
  const API_URL = "http://localhost:9000";
  const [selectedTerm, setSelectedTerm] = useState("long_term");
  const [selectedData, setSelectedData] = useState([]);

  const handleChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/topArtists?time_range=${selectedTerm}`
      );
      setSelectedData(response.data.topArtists);
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
            {selectedData.map((artist) => (
              <Grid item xs={12} sm={6} md={3} lg={3} key={artist.id}>
                <Card style={{ height: "100%" }}>
                  <CardMedia
                    style={{ paddingTop: "56.35%" }}
                    image={artist.images[0].url}
                    title={artist.name}
                  />
                  <CardContent style={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" gutterBottom>
                      {artist.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Popularity: {artist.popularity}
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
export default MyTopArtists;
