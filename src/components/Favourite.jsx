import React from "react";
import { useSelector } from "react-redux";
import MusicCard from "./MusicCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favourite = () => {
  const FavouriteSongs = useSelector((state) => state.favouriteSongs);
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1 style={{ textAlign: "center" }}>Favourite Songs</h1>
          {FavouriteSongs.length > 0 ? (
            <MusicCard data={FavouriteSongs} />
          ) : (
            <div style={{ textAlign: "center" }}>List is Empty</div>
          )}
        </>
      ) : (
        <>
          {toast.error("Please Login to access this page")}
          {(window.location.href = "/")}
        </>
      )}
    </>
  );
};

export default Favourite;
