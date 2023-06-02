import { Grid, Card, CardContent, Typography } from "@mui/material";
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
      <Grid container spacing={2}>
        {selectedData.map((user, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              style={{
                marginBottom: "10px",
                marginLeft: "10px",
                marginRight: "10px",
                backgroundColor: "#bb623e",
                color: "#e4eef6",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  {user.username || user.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Users;
