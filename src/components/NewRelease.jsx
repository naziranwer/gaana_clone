import React, { useState, useEffect } from "react";

import MusicCard from "./MusicCard";
import "../App.css";
import Horizontal from "./HorizontalScroll";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NewRelease = () => {
  const musicData = useSelector((state) => state.musicData);
  console.log("music data in new release", musicData);

  const data = musicData?.data?.filter((item) => item.dateOfRelease != null);

  const [featured, setFeatured] = useState([]);
  const navigate = useNavigate();

  const filteredData = (data) => {
    const currentDate = new Date(); // Get the current date
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(currentDate.getFullYear() - 10); // Calculate one year ago from the current date

    return data?.filter((item) => {
      const itemDate = new Date(item.dateOfRelease); // Assuming 'date' is a property in your data
      return itemDate >= oneYearAgo; // Return items with date one year or newer, and current month or newer
    });
    // .sort((a, b) => {
    //   const dateA = new Date(a.dateOfRelease);
    //   const dateB = new Date(b.dateOfRelease);
    //   return dateB - dateA; // Sort items by date in descending order (newest first)
    // });
  };

  const filtered = filteredData(data);

  console.log("data before filter", data, "data after filter", filtered);

  const navigation = () => {
    navigate("/newrelease");
    console.log("navigation for new release");
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>New Releases</h1>
      </div>
      <div className="featured-container">
        <MusicCard data={filtered} />
        {/* <Horizontal array={filtered} /> */}
      </div>
    </>
  );
};
export default NewRelease;
