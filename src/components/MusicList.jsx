import React, { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./Album.css";
import FeaturedSongs from "./FeaturedSongs";
import MusicCard from "./MusicCard";
import NewRelease from "./NewRelease";
import Artist from "./ArtistList";

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
      <FeaturedSongs musicData={musicData} />
      <NewRelease musicData={musicData} />
      {/* <MusicCard data={musicList} /> */}
      <Artist />
    </div>
  );
};

export default MusicList;
