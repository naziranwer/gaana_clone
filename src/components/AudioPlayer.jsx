import React, { useState, useRef, useEffect } from "react";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import { useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Avatar, Typography } from "@mui/material";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, setIsPlaying } from "../Redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { VolumeOffOutlined } from "@mui/icons-material";

const AudioPlayer = () => {
  const song = useSelector((state) => state.songReducer);
  const dispatch = useDispatch();
  const favouriteSongs = useSelector((state) => state.favouriteSongs);
  const isPlaying = useSelector((state) => state.audio.isPlaying);

  console.log("favourite Songs", favouriteSongs);

  const isSongInFavorites = (song, favouriteSongs) => {
    // Use the favoriteSongs array from your Redux state to check if the song is in favorites
    return favouriteSongs.some((favoriteSong) => favoriteSong._id === song._id);
  };
  // const [song, setSong] = useState(songfromRedux);
  // setSong(songfromRedux);

  console.log("audio player renders", song);

  // const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const theme = useTheme();

  const audioRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Function to update isMobile based on window width
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Add a listener for window resize events
    window.addEventListener("resize", updateIsMobile);

    // Remove the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
      dispatch(setIsPlaying(false));
    } else {
      audioElement.play();
      dispatch(setIsPlaying(true));
    }
    // dispatch(setIsPlaying(!isPlaying));
  };

  const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    setCurrentTime(audioElement.currentTime);
  };

  const handleVolumeChange = (event, newValue) => {
    if (isNaN(newValue) || !isFinite(newValue)) {
      return;
    }
    console.log("volume value", newValue);
    // Ensure that newValue is within the valid range [0, 100].
    const clampedValue = Math.min(Math.max(newValue, 0), 100);

    const audioElement = audioRef.current;
    const normalisedValue = clampedValue / 100;
    audioElement.volume = normalisedValue;
    setVolume(normalisedValue);

    // setIsMuted(normalisedValue === 0);
    console.log("volume Normalised value", normalisedValue);
  };

  const handleSkip = (seconds) => {
    const audioElement = audioRef.current;
    audioElement.currentTime += seconds;
  };
  const [isVolumeSliderVisible, setVolumeSliderVisible] = useState(false);
  const [isVolumeControlActive, setIsVolumeControlActive] = useState(false);

  const showVolumeSlider = () => {
    setVolumeSliderVisible(true);
    setIsVolumeControlActive(true);
  };
  const hideVolumeSlider = () => {
    setVolumeSliderVisible(false);
    setIsVolumeControlActive(false);
  };

  const AudioPlayerBackgroundColor =
    theme.palette.mode === "dark" ? "#1e1e1e" : "#fff";

  const isLoggedIn = JSON.parse(localStorage.getItem("user"));

  const handleFav = () => {
    if (isLoggedIn) {
      if (isSongInFavorites(song, favouriteSongs)) {
        dispatch(removeFavorite(song));
        console.log("song removed from favorite");
      } else {
        dispatch(addFavorite(song));
        console.log("song added to favorite");
      }
    } else {
      toast.error("You are not logged in.");
    }
  };

  console.log("isPlaying status", isPlaying, "audioref");

  useEffect(() => {
    const audioElement = audioRef.current;

    // Reset slider and play audio when song changes
    setCurrentTime(0); // Reset slider
    if (song && audioElement) {
      audioElement.src = song.audio_url; // Set new audio source
      audioElement.load(); // Load the new audio source
      if (isPlaying) {
        audioElement.play(); // Start playing if it was playing before
      }
    }
  }, [song]);

  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    const audioElement = audioRef.current;
    audioElement.muted = !audioElement.muted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className="audio-player-bar"
      style={{
        position: "fixed",
        width: "100%",
        // height: "100px",
        height: isMobile ? "150px" : "100px",
        // bottom: 10,
        left: 0,
        right: 0,
        backgroundColor: AudioPlayerBackgroundColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <audio
        ref={audioRef}
        src={song?.audio_url}
        onTimeUpdate={handleTimeUpdate}
        // autoPlay
      />
      <div style={{ width: "100%" }}>
        <Slider
          value={currentTime}
          max={audioRef.current?.duration || 0}
          onChange={(event, newValue) => {
            const audioElement = audioRef.current;
            audioElement.currentTime = newValue;
            setCurrentTime(newValue);
          }}
          aria-label="time slider"
          sx={{ color: "#E72C30", height: 2 }}
        />
      </div>
      <div
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? "5px" : "100px",
          // marginBottom: "50px",
          marginBottom: isMobile ? "20px" : "0",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            // gap: "10px",
            // marginLeft: isMobile ? "0" : "16px",
          }}
        >
          <Avatar alt="Song Avatar" src={song.thumbnail} />
          {!isMobile && (
            <div style={{ marginLeft: "16px" }}>
              <Typography variant="subtitle1">{song?.title}</Typography>
            </div>
          )}
          <div style={{ marginLeft: "5px" }}>
            <IconButton onClick={handleFav}>
              {isSongInFavorites(song, favouriteSongs) ? (
                <FavoriteIcon style={{ color: "#E72C30" }} />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </IconButton>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => handleSkip(-1)}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton onClick={togglePlay} sx={{ backgroundColor: "#E72C30" }}>
            {isPlaying ? (
              <PauseIcon sx={{ color: "#fff" }} />
            ) : (
              <PlayArrowIcon sx={{ color: "#fff" }} />
            )}
          </IconButton>
          <IconButton onClick={() => handleSkip(1)}>
            <SkipNextIcon />
          </IconButton>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          {isVolumeSliderVisible && (
            <div
              onMouseEnter={showVolumeSlider}
              onMouseLeave={hideVolumeSlider}
              style={{
                position: "fixed",
                bottom: isMobile ? "12%" : "8%", // Position below the volume icon
                right: "10%", // Center horizontally
                transform: "translateX(-50%)", // Center horizontally
                zIndex: 9999, // Set a high z-index to appear over other elements
              }}
            >
              <Slider
                value={isMuted ? 0 : volume * 100}
                onChange={handleVolumeChange}
                aria-label="volume slider"
                max={100}
                orientation="vertical"
                sx={{
                  color: "#E72C30",
                  height: 150, // Adjust the height to make the slider taller
                  "& .MuiSlider-thumb": {
                    width: 24, // Adjust the width of the thumb
                    height: 24, // Adjust the height of the thumb
                  },
                }}
              />
            </div>
          )}
          <IconButton
            onMouseEnter={showVolumeSlider}
            onMouseLeave={hideVolumeSlider}
            onClick={toggleMute}
          >
            {/* <VolumeUpIcon /> */}
            {isMuted || volume === 0 ? <VolumeOffOutlined /> : <VolumeUpIcon />}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
