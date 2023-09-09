import React from "react";
import { useSelector } from "react-redux";
import MusicCard from "./MusicCard";

const Favourite = () => {
  const FavouriteSongs = useSelector((state) => state.favouriteSongs);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Favourite Songs</h1>
      {FavouriteSongs.length > 0 ? (
        <MusicCard data={FavouriteSongs} />
      ) : (
        <div style={{ textAlign: "center" }}>List is Empty</div>
      )}
    </>
  );
};

export default Favourite;
