import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  Container,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import MusicList from "./components/MusicList";
import Album from "./components/AlbumList";
import { AlbumDetails } from "./components/AlbumDetails";
import NavBar from "./components/Navbar";
import HeaderComponent from "./components/HeaderComponent";
import Artist from "./components/ArtistList";
import ArtistDetails from "./components/ArtistDetails";
// import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar toggleDarkMode={toggleDarkMode} />
        <BrowserRouter>
          <Container className="full-width-container">
            {/* <h1>Music App</h1> */}
            <Routes>
              <Route path="/" exact element={<MusicList />} />
              <Route path="/albums" element={<Album />} />
              <Route path="/nav" element={<NavBar />} />
              <Route path="/header" element={<HeaderComponent />} />
              <Route path="/albums/:albumTitle" element={<AlbumDetails />} />
              <Route path="/artist" element={<Artist />} />
              <Route path="/artist/:artistName" element={<ArtistDetails />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
