import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  CardMedia,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Users = () => {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ height: "250px", overflow: "auto" }}>
      <Container maxWidth="lg">
        {" "}
        <Grid container spacing={1}>
          {selectedData.map((user, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                style={{
                  height: "100%",
                  marginBottom: "10px",
                  backgroundColor: "#bb623e",
                  color: "#e4eef6",
                }}
              >
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2">
                    {user.username || user.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>{" "}
      </Container>
    </div>
  );
};

export default Users;
