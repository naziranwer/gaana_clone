import React, { useState, useEffect } from "react";

import MusicCard from "./MusicCard";
import "../App.css";

const FeaturedSongs = ({ musicData }) => {
  //   console.log("music data in feautured", musicData);

  const data = musicData.data;
  const [featured, setFeatured] = useState([]);

  const filteredData = (data) => {
    return data?.filter((item) => {
      return item.featured != null;
    });
  };
  useEffect(() => {
    // Call the filteredData function and set its result to the featured state
    const filtered = filteredData(data);
    setFeatured(filtered);
    console.log(featured);
  }, [data]);

  return (
    <>
      <h1>FeaturedSongs</h1>
      <div className="featured-container">
        <MusicCard data={featured} />
      </div>
    </>
  );
};
export default FeaturedSongs;
