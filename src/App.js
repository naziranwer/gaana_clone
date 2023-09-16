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
import Row from "./components/Horizontal";
import Horizontal from "./components/HorizontalScroll";
import FeaturedSongs from "./components/FeaturedSongs";
import NewRelease from "./components/NewRelease";
import Footer from "./components/Footer";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setArtistData,
  setAlbumData,
  setMusicData,
  setOneSongData,
} from "./Redux/actions";
import Home from "./components/Home";
import AudioPlayer from "./components/AudioPlayer";
import Romance from "./components/moods/Romance";
import Favourite from "./components/Favourite";
import Login from "./components/auth/Login";
import AnotherLogin from "./components/auth/AnotherLogin";
import Signup from "./components/auth/Register";
import FavWithoutLogin from "./components/withoutLogin/Fav";
import NotFound from "./components/NotFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/music/artist/",
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
          "https://academics.newtonschool.co/api/v1/music/song?page=1&limit=1000",
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

  const musicData = useSelector((state) => state.musicData);
  console.log("this is music data from redux store in app.js", musicData);
  const musicList = musicData.data || [];
  console.log("this is array data in app.js", musicList);

  const [isDarkMode, setIsDarkMode] = useState(false);

  {
    musicList.length > 0 && dispatch(setOneSongData(musicList[0]));
  }

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
        <BrowserRouter>
          <CssBaseline />
          <NavBar toggleDarkMode={toggleDarkMode} />

          <Container className="full-width-container" maxWidth={false}>
            {/* <h1>Music App</h1> */}
            <ToastContainer />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/musiclist" exact element={<MusicList />} />
              <Route path="/albums" element={<Album />} />
              <Route path="/nav" element={<NavBar />} />
              <Route path="/header" element={<HeaderComponent />} />
              <Route path="/albums/:albumTitle" element={<AlbumDetails />} />
              <Route path="/artist" element={<Artist />} />
              <Route path="/artist/:artistId" element={<ArtistDetails />} />
              <Route path="/btnlist" element={<Horizontal />} />
              <Route path="/horizontal" element={<Row />} />
              <Route path="/featured" element={<FeaturedSongs />} />
              <Route path="/newrelease" element={<NewRelease />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/romance" element={<Romance />} />
              <Route path="/audioplayer" element={<AudioPlayer />} />
              <Route path="/favourite" element={<Favourite />} />
              <Route path="/login" element={<Login />} />
              <Route path="/fav" element={<FavWithoutLogin />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Container>
        </BrowserRouter>
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Footer />
        <br /> <br /> <br />
        <AudioPlayer />
      </ThemeProvider>
    </>
  );
}

export default App;
