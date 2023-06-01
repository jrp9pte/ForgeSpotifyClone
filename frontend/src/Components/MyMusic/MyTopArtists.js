import React, { useState, useEffect } from "react";

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
} from "@mui/material";

const longTerm = {
  href: "https://api.spotify.com/v1/me/top/artists?limit=5&offset=0&time_range=long_term",
  limit: 5,
  next: "https://api.spotify.com/v1/me/top/artists?limit=5&offset=5&time_range=long_term",
  offset: 0,
  previous: null,
  total: 50,
  items: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1dABGukgZ8XKKOdd2rVSHM",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["lo-fi cover", "lo-fi product"],
      href: "https://api.spotify.com/v1/artists/1dABGukgZ8XKKOdd2rVSHM",
      id: "1dABGukgZ8XKKOdd2rVSHM",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eba54adba5045ec1bf457a9666",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616100005174a54adba5045ec1bf457a9666",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f178a54adba5045ec1bf457a9666",
          height: 160,
          width: 160,
        },
      ],
      name: "Lofi Fruits Music",
      popularity: 75,
      type: "artist",
      uri: "spotify:artist:1dABGukgZ8XKKOdd2rVSHM",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["chicago rap", "hip hop", "rap"],
      href: "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x",
      id: "5K4W6rqBFWDnAN6FQUkS6x",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb867008a971fae0f4d913f63a",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616100005174867008a971fae0f4d913f63a",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f178867008a971fae0f4d913f63a",
          height: 160,
          width: 160,
        },
      ],
      name: "Kanye West",
      popularity: 90,
      type: "artist",
      uri: "spotify:artist:5K4W6rqBFWDnAN6FQUkS6x",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["chicago rap", "melodic rap", "rap"],
      href: "https://api.spotify.com/v1/artists/4MCBfE4596Uoi2O4DtmEMz",
      id: "4MCBfE4596Uoi2O4DtmEMz",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb1908e1a8b79abf71d5598944",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab676161000051741908e1a8b79abf71d5598944",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f1781908e1a8b79abf71d5598944",
          height: 160,
          width: 160,
        },
      ],
      name: "Juice WRLD",
      popularity: 88,
      type: "artist",
      uri: "spotify:artist:4MCBfE4596Uoi2O4DtmEMz",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/40ZNYROS4zLfyyBSs2PGe2",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["classic oklahoma country", "modern country pop"],
      href: "https://api.spotify.com/v1/artists/40ZNYROS4zLfyyBSs2PGe2",
      id: "40ZNYROS4zLfyyBSs2PGe2",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb4fd54df35bfcfa0fc9fc2da7",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab676161000051744fd54df35bfcfa0fc9fc2da7",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f1784fd54df35bfcfa0fc9fc2da7",
          height: 160,
          width: 160,
        },
      ],
      name: "Zach Bryan",
      popularity: 83,
      type: "artist",
      uri: "spotify:artist:40ZNYROS4zLfyyBSs2PGe2",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3YYbAExunnHv5pW7GUZefk",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["melodic rap", "rage rap", "vapor trap"],
      href: "https://api.spotify.com/v1/artists/3YYbAExunnHv5pW7GUZefk",
      id: "3YYbAExunnHv5pW7GUZefk",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb7bb5d857d00be5c8bbf5a062",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab676161000051747bb5d857d00be5c8bbf5a062",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f1787bb5d857d00be5c8bbf5a062",
          height: 160,
          width: 160,
        },
      ],
      name: "DC The Don",
      popularity: 59,
      type: "artist",
      uri: "spotify:artist:3YYbAExunnHv5pW7GUZefk",
    },
  ],
};

const mediumTerm = {
  href: "https://api.spotify.com/v1/me/top/artists?limit=5&offset=0",
  limit: 5,
  next: "https://api.spotify.com/v1/me/top/artists?limit=5&offset=5",
  offset: 0,
  previous: null,
  total: 50,
  items: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/40ZNYROS4zLfyyBSs2PGe2",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["classic oklahoma country", "modern country pop"],
      href: "https://api.spotify.com/v1/artists/40ZNYROS4zLfyyBSs2PGe2",
      id: "40ZNYROS4zLfyyBSs2PGe2",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb4fd54df35bfcfa0fc9fc2da7",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab676161000051744fd54df35bfcfa0fc9fc2da7",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f1784fd54df35bfcfa0fc9fc2da7",
          height: 160,
          width: 160,
        },
      ],
      name: "Zach Bryan",
      popularity: 83,
      type: "artist",
      uri: "spotify:artist:40ZNYROS4zLfyyBSs2PGe2",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1dABGukgZ8XKKOdd2rVSHM",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["lo-fi cover", "lo-fi product"],
      href: "https://api.spotify.com/v1/artists/1dABGukgZ8XKKOdd2rVSHM",
      id: "1dABGukgZ8XKKOdd2rVSHM",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eba54adba5045ec1bf457a9666",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616100005174a54adba5045ec1bf457a9666",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f178a54adba5045ec1bf457a9666",
          height: 160,
          width: 160,
        },
      ],
      name: "Lofi Fruits Music",
      popularity: 75,
      type: "artist",
      uri: "spotify:artist:1dABGukgZ8XKKOdd2rVSHM",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["chicago rap", "hip hop", "rap"],
      href: "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x",
      id: "5K4W6rqBFWDnAN6FQUkS6x",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb867008a971fae0f4d913f63a",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616100005174867008a971fae0f4d913f63a",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f178867008a971fae0f4d913f63a",
          height: 160,
          width: 160,
        },
      ],
      name: "Kanye West",
      popularity: 90,
      type: "artist",
      uri: "spotify:artist:5K4W6rqBFWDnAN6FQUkS6x",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2jku7tDXc6XoB6MO2hFuqg",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: [
        "canadian hip hop",
        "canadian trap",
        "melodic rap",
        "r&b",
        "rap",
        "toronto rap",
        "trap",
      ],
      href: "https://api.spotify.com/v1/artists/2jku7tDXc6XoB6MO2hFuqg",
      id: "2jku7tDXc6XoB6MO2hFuqg",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5ebbd5d3e1b363c3e26710661c3",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616100005174bd5d3e1b363c3e26710661c3",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f178bd5d3e1b363c3e26710661c3",
          height: 160,
          width: 160,
        },
      ],
      name: "Tory Lanez",
      popularity: 80,
      type: "artist",
      uri: "spotify:artist:2jku7tDXc6XoB6MO2hFuqg",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["conscious hip hop", "hip hop", "north carolina hip hop", "rap"],
      href: "https://api.spotify.com/v1/artists/6l3HvQ5sa6mXTsMTB19rO5",
      id: "6l3HvQ5sa6mXTsMTB19rO5",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5ebadd503b411a712e277895c8a",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616100005174add503b411a712e277895c8a",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f178add503b411a712e277895c8a",
          height: 160,
          width: 160,
        },
      ],
      name: "J. Cole",
      popularity: 87,
      type: "artist",
      uri: "spotify:artist:6l3HvQ5sa6mXTsMTB19rO5",
    },
  ],
};

const shortTerm = {
  href: "https://api.spotify.com/v1/me/top/artists?limit=5&offset=0&time_range=short_term",
  limit: 5,
  next: "https://api.spotify.com/v1/me/top/artists?limit=5&offset=5&time_range=short_term",
  offset: 0,
  previous: null,
  total: 50,
  items: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/40ZNYROS4zLfyyBSs2PGe2",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["classic oklahoma country", "modern country pop"],
      href: "https://api.spotify.com/v1/artists/40ZNYROS4zLfyyBSs2PGe2",
      id: "40ZNYROS4zLfyyBSs2PGe2",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb4fd54df35bfcfa0fc9fc2da7",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab676161000051744fd54df35bfcfa0fc9fc2da7",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f1784fd54df35bfcfa0fc9fc2da7",
          height: 160,
          width: 160,
        },
      ],
      name: "Zach Bryan",
      popularity: 83,
      type: "artist",
      uri: "spotify:artist:40ZNYROS4zLfyyBSs2PGe2",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["chicago rap", "hip hop", "rap"],
      href: "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x",
      id: "5K4W6rqBFWDnAN6FQUkS6x",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb867008a971fae0f4d913f63a",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616100005174867008a971fae0f4d913f63a",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f178867008a971fae0f4d913f63a",
          height: 160,
          width: 160,
        },
      ],
      name: "Kanye West",
      popularity: 90,
      type: "artist",
      uri: "spotify:artist:5K4W6rqBFWDnAN6FQUkS6x",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2jku7tDXc6XoB6MO2hFuqg",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: [
        "canadian hip hop",
        "canadian trap",
        "melodic rap",
        "r&b",
        "rap",
        "toronto rap",
        "trap",
      ],
      href: "https://api.spotify.com/v1/artists/2jku7tDXc6XoB6MO2hFuqg",
      id: "2jku7tDXc6XoB6MO2hFuqg",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5ebbd5d3e1b363c3e26710661c3",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616100005174bd5d3e1b363c3e26710661c3",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f178bd5d3e1b363c3e26710661c3",
          height: 160,
          width: 160,
        },
      ],
      name: "Tory Lanez",
      popularity: 80,
      type: "artist",
      uri: "spotify:artist:2jku7tDXc6XoB6MO2hFuqg",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["emo rap", "miami hip hop"],
      href: "https://api.spotify.com/v1/artists/15UsOTVnJzReFVN1VCnxy4",
      id: "15UsOTVnJzReFVN1VCnxy4",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5ebf0c20db5ef6c6fbe5135d2e4",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616100005174f0c20db5ef6c6fbe5135d2e4",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f178f0c20db5ef6c6fbe5135d2e4",
          height: 160,
          width: 160,
        },
      ],
      name: "XXXTENTACION",
      popularity: 86,
      type: "artist",
      uri: "spotify:artist:15UsOTVnJzReFVN1VCnxy4",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U",
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: ["hip hop", "pittsburgh rap", "rap"],
      href: "https://api.spotify.com/v1/artists/4LLpKhyESsyAXpc4laK94U",
      id: "4LLpKhyESsyAXpc4laK94U",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5ebed3b89aa602145fde71a163a",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616100005174ed3b89aa602145fde71a163a",
          height: 320,
          width: 320,
        },
        {
          url: "https://i.scdn.co/image/ab6761610000f178ed3b89aa602145fde71a163a",
          height: 160,
          width: 160,
        },
      ],
      name: "Mac Miller",
      popularity: 83,
      type: "artist",
      uri: "spotify:artist:4LLpKhyESsyAXpc4laK94U",
    },
  ],
};

function MyTopArtists() {
  const [selectedTerm, setSelectedTerm] = useState("longTerm");

  const handleChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  const termData = {
    longTerm: longTerm,
    mediumTerm: mediumTerm,
    shortTerm: shortTerm,
  };

  const selectedData = termData[selectedTerm];

  return (
    <>
      <CssBaseline />
      <div>
        <Container maxWidth="lg">
          <Grid container spacing={4} justify="left">
            <Grid item xs={12}>
              <Select value={selectedTerm} onChange={handleChange}>
                <MenuItem value="longTerm">Long Term</MenuItem>
                <MenuItem value="mediumTerm">Medium Term</MenuItem>
                <MenuItem value="shortTerm">Short Term</MenuItem>
              </Select>
            </Grid>
            {selectedData.items.map((artist) => (
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
