import React, { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./Album.css"; // Import your custom CSS file for styling
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";

const Album = () => {
  const [albumData, setAlbumData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://academics.newtonschool.co/api/v1/music/album", {
      headers: {
        projectId: "9cwb93cdi4mj",
      },
    })
      .then((response) => response.json())
      .then((data) => setAlbumData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const albumList = albumData.data || [];
  const albumClick = (album) => {
    navigate(`/albums/${album.title}`, { state: album });
  };
  return (
    <div>
      <h2>Album Songs</h2>
      <Grid container spacing={2} className="album-grid">
        {albumList.map((album) => (
          <Grid
            item
            key={album.id}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            onClick={() => albumClick(album)}
          >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={album.image}
                alt={album.title}
              />
              <CardContent>
                <Typography variant="subtitle1">
                  {album.title.slice(0, 15)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Album;
