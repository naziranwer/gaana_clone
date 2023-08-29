import React, { useState, useEffect } from "react";

import MusicCard from "./MusicCard";
import "../App.css";
import Horizontal from "./HorizontalScroll";

const NewRelease = ({ musicData }) => {
  console.log("music data in new release", musicData);

  const data = musicData?.data;
  const [featured, setFeatured] = useState([]);

  const filteredData = (data) => {
    const currentDate = new Date(); // Get the current date
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(currentDate.getFullYear() - 1); // Calculate one year ago from the current date

    return data
      ?.filter((item) => {
        const itemDate = new Date(item.createdAt); // Assuming 'date' is a property in your data
        return itemDate >= oneYearAgo; // Return items with date one year or newer, and current month or newer
      })
      .sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA; // Sort items by date in descending order (newest first)
      });
  };
  const filtered = filteredData(data);

  useEffect(() => {
    // Call the filteredData function and set its result to the featured state

    setFeatured(filtered);
    console.log("new release songs", featured);
  }, [data]);

  console.log("data before filter", data, "data after filter", filtered);

  return (
    <>
      <h1>New Releases</h1>
      <div className="featured-container">
        {/* <MusicCard data={featured} /> */}
        <Horizontal array={featured} />
      </div>
    </>
  );
};
export default NewRelease;
