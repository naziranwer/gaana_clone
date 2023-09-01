import React, { useState, useEffect } from "react";
import "./Album.css";
import MusicCard from "./MusicCard";
import { useSelector } from "react-redux";

const MusicList = () => {
  // const [musicData, setMusicData] = useState([]);
  const musicData = useSelector((state) => state.musicData);

  console.log("this is music data from redux store", musicData);
  const musicList = musicData.data || [];
  console.log("this is array data", musicList);
  return (
    <div>
      <MusicCard data={musicList} />
    </div>
  );
};

export default MusicList;
