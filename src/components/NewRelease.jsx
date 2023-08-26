import React, { useState, useEffect } from "react";

import MusicCard from "./MusicCard";
import "../App.css";

const NewRelease = ({ musicData }) => {
  //   console.log("music data in feautured", musicData);

  const data = musicData.data;
  const [featured, setFeatured] = useState([]);

  const filteredData = (data) => {
    const currentDate = new Date(); // Get the current date
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(currentDate.getFullYear() - 1); // Calculate one year ago from the current date

    return data
      ?.filter((item) => {
        const itemDate = new Date(item.dateOfRelease); // Assuming 'date' is a property in your data
        return itemDate >= oneYearAgo; // Return items with date one year or newer, and current month or newer
      })
      .sort((a, b) => {
        const dateA = new Date(a.dateOfRelease);
        const dateB = new Date(b.dateOfRelease);
        return dateB - dateA; // Sort items by date in descending order (newest first)
      });
  };

  useEffect(() => {
    // Call the filteredData function and set its result to the featured state
    const filtered = filteredData(data);
    setFeatured(filtered);
    console.log("new release songs", featured);
  }, [data]);

  return (
    <>
      <h1>Newest Songs</h1>
      <div className="featured-container">
        <MusicCard data={featured} />
      </div>
    </>
  );
};
export default NewRelease;
