import React from "react";
import { useSelector } from "react-redux";
import MusicCard from "./MusicCard";

const Favourite = () => {
  const FavouriteSongs = useSelector((state) => state.favouriteSongs);
  return (
    <>
      <div>Favourite Songs</div>
      <MusicCard data={FavouriteSongs} />
    </>
  );
};

export default Favourite;
