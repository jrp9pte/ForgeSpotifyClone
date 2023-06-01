import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const Users = () => {
  const users = [
    { name: "John Doe", favoriteArtist: "The Beatles" },
    { name: "Jane Smith", favoriteArtist: "Coldplay" },
    { name: "Bob Johnson", favoriteArtist: "Ed Sheeran" },
    { name: "John Doe", favoriteArtist: "The Beatles" },
    { name: "Jane Smith", favoriteArtist: "Coldplay" },
    { name: "Bob Johnson", favoriteArtist: "Ed Sheeran" },
  ];

  return (
    <Grid container spacing={2}>
      {users.map((user, index) => (
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
                {user.name}
              </Typography>
              <Typography color="textSecondary">
                Favorite Artist: {user.favoriteArtist}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Users;
