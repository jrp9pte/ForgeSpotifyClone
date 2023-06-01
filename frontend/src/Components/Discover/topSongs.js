import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { CssBaseline, Card, CardActions, CardContent, CardMedia, Grid, Container } from "@mui/material";



function TopArtists() {



    return (
        <>
            <CssBaseline />
            <div>
                <Container maxWidth="sm" >
                    <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                        Top Artists
                    </Typography>
                </Container>
                <Container maxWidth="md" style={{}}>
                    <Grid container spacing={4} justify="left">
                        <Grid item>
                            <Card style={{ height: "100%" }}>
                                <CardMedia
                                    style={{ paddingTop: "56.35%" }}
                                    image="https://fakealbumcovers.com/images/FakeAlbumCover.png"
                                    title="image Title"
                                />
                                <CardContent style={{ flexGrow: 1 }}>
                                    <Typography>
                                        Information about artist
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );




}

export default TopArtists;
