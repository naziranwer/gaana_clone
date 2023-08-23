import React, { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./Album.css";

const MusicList = () => {
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    fetch("https://academics.newtonschool.co/api/v1/music/song", {
      headers: {
        projectId: "9cwb93cdi4mj",
      },
    })
      .then((response) => response.json())
      .then((data) => setMusicData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log("this is music data", musicData);
  const musicList = musicData.data || [];
  console.log("this is array data", musicList);
  return (
    <div>
      <h1>Music List</h1>
      <Grid container spacing={2} className="album-grid">
        {musicList.map((song) => (
          <Grid item key={song.id} xs={6} sm={4} md={3} lg={2}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={song.thumbnail}
                alt={song.title}
              />
              <CardContent>
                <Typography variant="subtitle1">
                  {song.title.slice(0, 15)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MusicList;
