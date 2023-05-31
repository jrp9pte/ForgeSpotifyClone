import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { CssBaseline, Card, CardActions, CardContent, CardMedia, Grid, Container } from "@mui/material";



function TopArtists() {

    const artists = [
        { name: "John Doe", favoriteArtist: "The Beatles" },
        { name: "Jane Smith", favoriteArtist: "Coldplay" },
        { name: "Bob Johnson", favoriteArtist: "Ed Sheeran" },
        { name: "John Doe", favoriteArtist: "The Beatles" },
        { name: "Jane Smith", favoriteArtist: "Coldplay" },
        { name: "Bob Johnson", favoriteArtist: "Ed Sheeran" },
    ];

    const artistsTest = {
        "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20",
        "limit": 20,
        "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
        "offset": 0,
        "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
        "total": 4,
        "items": [
            {
                "external_urls": {
                    "spotify": "string"
                },
                "followers": {
                    "href": "string",
                    "total": 0
                },
                "genres": ["Prog rock", "Grunge"],
                "href": "string",
                "id": "string",
                "images": [
                    {
                        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                        "height": 300,
                        "width": 300
                    }
                ],
                "name": "name1",
                "popularity": 0,
                "type": "artist",
                "uri": "string"
            }
            ,
            {
                "external_urls": {
                    "spotify": "string"
                },
                "followers": {
                    "href": "string",
                    "total": 0
                },
                "genres": ["Prog rock", "Grunge"],
                "href": "string",
                "id": "string2",
                "images": [
                    {
                        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                        "height": 300,
                        "width": 300
                    }
                ],
                "name": "name2",
                "popularity": 0,
                "type": "artist",
                "uri": "string"
            }
        ]
    }



    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                    Top Artists
                </Typography>
                <Container style={{}}>
                    <Grid container spacing={4} justify="left">
                        {artistsTest.items.map((item) => (
                            <Grid item key={item.id}>
                                <Card style={{ height: "100%" }}>
                                    <CardMedia
                                        style={{ paddingTop: "80%" }} // Adjust the paddingTop value to control the height
                                        image={item.images[0].url}
                                        title="image Title"
                                    />
                                    <CardContent style={{ flexGrow: 1 }}>
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography variant="body1">
                                            This {item.type} is from{" "}
                                            {item.genres.length > 0 ? (
                                                <>
                                                    {item.genres.slice(0, -1).join(", ")}
                                                    {item.genres.length > 1 && ","} and {item.genres.slice(-1)}
                                                </>
                                            ) : (
                                                "No genres available"
                                            )}
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </>
    );






}

export default TopArtists;
