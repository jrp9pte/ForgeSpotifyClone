import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Login/UserProvider";

const NewReleases = () => {
  const { user } = useContext(UserContext);
  const API_URL = "http://localhost:9000";
  const [selectedData, setSelectedData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/topRecs`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      });
      setSelectedData(response.data.newReleases);
    } catch (error) {
      console.error("Error retrieving top artists:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const truncateTitle = (title, limit) => {
    const words = title.split(" ");
    if (words.length <= limit) {
      return title;
    }
    return words.slice(0, limit).join(" ") + " ...";
  };

  const handleTitleClick = (index) => {
    const updatedData = [...selectedData];
    updatedData[index].expanded = !updatedData[index].expanded;
    setSelectedData(updatedData);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justify="left">
        {selectedData.map((album, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={album.id}>
            <Card style={{ height: "100%" }}>
              <CardMedia
                style={{ paddingTop: "56.35%" }}
                image={album.images[0].url}
                title={album.name}
              />
              <CardContent style={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={{
                    overflow: "hidden",
                    textOverflow: selectedData[index]?.expanded
                      ? "unset"
                      : "ellipsis",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTitleClick(index)}
                >
                  {selectedData[index]?.expanded
                    ? album.name
                    : truncateTitle(album.name, 4)}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {album.artists[0].name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewReleases;
