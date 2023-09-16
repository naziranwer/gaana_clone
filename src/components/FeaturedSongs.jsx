import React, { useState, useEffect } from "react";

import MusicCard from "./MusicCard";
import "../App.css";
import Horizontal from "./HorizontalScroll";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const FeaturedSongs = () => {
  const musicData = useSelector((state) => state.musicData);
  console.log("music data in feautured from redux", musicData);

  const navigate = useNavigate();
  const musicList = musicData?.data;
  // console.log("music dataList in featured", data);
  // const [featured, setFeatured] = useState([]);

  // const filteredData = (data) => {
  //   return data?.filter((item) => {
  //     return item.featured != null;
  //   });
  // };
  // useEffect(() => {
  //   // Call the filteredData function and set its result to the featured state
  //   const filtered = filteredData(data);
  //   setFeatured(filtered);
  //   console.log("featured music", featured);
  // }, []);

  const featuredSongs = musicList?.filter((song) => song.featured != null);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Trending Songs</h1>
      </div>
      <div className="featured-container">
        <MusicCard data={featuredSongs} />
      </div>
    </>
  );
};
export default FeaturedSongs;
