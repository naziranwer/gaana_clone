import React, { useState, useEffect } from "react";
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
import "./App.css";
import { useDispatch } from "react-redux";
import { setArtistData, setAlbumData, setMusicData } from "./Redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/music/artist",
          {
            headers: {
              projectId: "9cwb93cdi4mj",
            },
          }
        );
        const data = await response.json();
        dispatch(setArtistData(data));
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtistData();
  }, []);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/music/album",
          {
            headers: {
              projectId: "9cwb93cdi4mj",
            },
          }
        );
        const data = await response.json();
        dispatch(setAlbumData(data));
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    };

    fetchAlbumData();
  }, []);

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/music/song",
          {
            headers: {
              projectId: "9cwb93cdi4mj",
            },
          }
        );
        const data = await response?.json();
        dispatch(setMusicData(data));
      } catch (error) {
        console.error("Error fetching music data:", error);
      }
    };

    fetchMusicData();
  }, []);

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
