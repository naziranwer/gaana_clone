import React, { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./Album.css";
import FeaturedSongs from "./FeaturedSongs";
import MusicCard from "./MusicCard";
import NewRelease from "./NewRelease";
import Artist from "./ArtistList";
import Row from "./Horizontal";
import Header from "./HeaderComponent";
import SlidingCaraousel from "./SlidingCaraousel";
import { useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";

const Home = () => {
  // const [musicData, setMusicData] = useState([]);
  const artistData = useSelector((state) => state.artistData);
  const albumData = useSelector((state) => state.albumData);
  const musicData = useSelector((state) => state.musicData);

  console.log("this is music data from redux store", musicData);
  const musicList = musicData.data || [];
  console.log("this is array data", musicList);
  return (
    <div>
      <Header />
      {musicData.status === "success" ? (
        <div>
          <SlidingCaraousel />
          <FeaturedSongs />
          <NewRelease />

          <Row />
        </div>
      ) : (
        <>
          <ShimmerUI />
        </>
      )}
    </div>
  );
};

export default Home;
