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
import Artist from "./components/ArtistList";
import ArtistDetails from "./components/ArtistDetails";
import HeaderComponent from "./components/HeaderComponent";
import ButtonList from "./components/ButtonList";
import Row from "./components/Horizontal";
import Horizontal from "./components/HorizontalScroll";
import FeaturedSongs from "./components/FeaturedSongs";
import NewRelease from "./components/NewRelease";
import Footer from "./components/Footer";
// import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log("Toggle the dark mode", isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  console.log("app renders", isDarkMode);

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
              <Route path="/btnlist" element={<Horizontal />} />
              <Route path="/horizontal" element={<Row />} />
              <Route path="/featured" element={<FeaturedSongs />} />
              <Route path="/newrelease" element={<NewRelease />} />
              <Route path="/footer" element={<Footer />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
