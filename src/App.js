import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Container } from "@mui/material";
import MusicList from "./components/MusicList";
import Album from "./components/AlbumList";
import { AlbumDetails } from "./components/AlbumDetails";
import NavBar from "./components/Navbar";
// import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Container className="full-width-container">
          {/* <h1>Music App</h1> */}
          <Routes>
            <Route path="/" exact element={<MusicList />} />
            <Route path="/albums" element={<Album />} />
            <Route path="/nav" element={<NavBar />} />
            <Route path="/albums/:albumTitle" element={<AlbumDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
