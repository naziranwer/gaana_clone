import React, { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./Album.css"; // Import your custom CSS file for styling
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";

const Artist = () => {
  const [artistData, setArtistData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://academics.newtonschool.co/api/v1/music/artist", {
      headers: {
        projectId: "9cwb93cdi4mj",
      },
    })
      .then((response) => response.json())
      .then((data) => setArtistData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const artistList = artistData.data || [];
  console.log("artists list", artistList);

  const artistClick = (artist) => {
    navigate(`/artist/${artist._id}`, { state: artist });
    console.log("navigation for artist");
  };
  return (
    <div>
      <h2>Artists</h2>
      <Grid container spacing={2} className="album-grid">
        {artistList?.map((artist) => (
          <Grid
            item
            key={artist._id}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            onClick={() => artistClick(artist)}
          >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={artist.image}
                alt={artist.name}
              />
              <CardContent>
                <Typography variant="subtitle1">
                  {artist.name.slice(0, 15)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Artist;
