import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Container } from "@mui/material";
import MusicList from "./components/MusicList";
import Album from "./components/AlbumList";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <h1>Music App</h1>
        <Routes>
          <Route path="/" exact element={<MusicList />} />
          <Route path="/albums" element={<Album />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
