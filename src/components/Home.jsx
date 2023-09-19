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
import SlidingRow from "./SlidingRow";

const Home = () => {
  // const [musicData, setMusicData] = useState([]);
  const artistData = useSelector((state) => state.artistData);
  const albumData = useSelector((state) => state.albumData);
  const musicData = useSelector((state) => state.musicData);

  console.log("this is music data from redux store", musicData);
  const musicList = musicData.data || [];
  console.log("this is array data", musicList);

  const romanticSongs = musicList.filter((song) => song.mood === "romantic");
  const featuredSongs = musicList?.filter((song) => song.featured != null);

  const data = musicList?.filter((item) => item.dateOfRelease != null);

  const filteredData = (data) => {
    const currentDate = new Date(); // Get the current date
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(currentDate.getFullYear() - 10);

    return data?.filter((item) => {
      const itemDate = new Date(item.dateOfRelease);
      return itemDate >= oneYearAgo;
    });
  };

  const newReleasedSongs = filteredData(data);

  return (
    <div>
      <Header />
      {/* <SlidingCaraousel /> */}
      {musicData.status === "success" ? (
        <div>
          <SlidingCaraousel />
          {/* <FeaturedSongs /> */}
          <SlidingRow
            array={featuredSongs}
            heading={"Trending Songs"}
            path={"/featured"}
          />
          {/* <NewRelease /> */}
          <SlidingRow
            array={newReleasedSongs}
            heading={"New Releases"}
            path={"/newrelease"}
          />
          <Row />
          <SlidingRow
            array={romanticSongs}
            heading={"Romantic Songs"}
            path={"romance"}
          />
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
