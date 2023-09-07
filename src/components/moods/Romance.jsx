import React from "react";
import MusicCard from "../MusicCard";
import "../Album.css";
import { useSelector } from "react-redux";

const Romance = () => {
  const musicData = useSelector((state) => state.musicData);

  console.log("this is music data from redux store", musicData);
  const musicList = musicData.data || [];
  console.log("this is array data", musicList);

  const RomanticList = musicList.filter((music) => music.mood === "romantic");

  console.log("romantic list", RomanticList);
  return (
    <div>
      <MusicCard data={RomanticList} />
    </div>
  );
};

export default Romance;
