import React, { useState, useRef } from "react";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Avatar, Typography } from "@mui/material";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../Redux/actions";

const AudioPlayer = () => {
  const song = useSelector((state) => state.songReducer);
  const dispatch = useDispatch();
  const favouriteSongs = useSelector((state) => state.favouriteSongs);

  console.log("favourite Songs", favouriteSongs);

  const isSongInFavorites = (song, favouriteSongs) => {
    // Use the favoriteSongs array from your Redux state to check if the song is in favorites
    return favouriteSongs.some((favoriteSong) => favoriteSong._id === song._id);
  };
  // const [song, setSong] = useState(songfromRedux);
  // setSong(songfromRedux);

  console.log("audio player renders", song);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const theme = useTheme();

  const audioRef = useRef(null);

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    setCurrentTime(audioElement.currentTime);
  };

  // const handleVolumeChange = (event, newValue) => {
  //   const audioElement = audioRef.current;
  //   console.log("volume value", newValue);
  //   const normalisedValue = newValue / 100;
  //   audioElement.volume = normalisedValue;
  //   setVolume(normalisedValue);

  //   console.log("volume Normalised value", normalisedValue);
  // };

  const handleVolumeChange = (event, newValue) => {
    if (isNaN(newValue) || !isFinite(newValue)) {
      // Handle the case where newValue is not a valid number.
      // You can log an error or perform some default action.
      return;
    }
    console.log("volume value", newValue);
    // Ensure that newValue is within the valid range [0, 100].
    const clampedValue = Math.min(Math.max(newValue, 0), 100);

    const audioElement = audioRef.current;
    const normalisedValue = clampedValue / 100;
    audioElement.volume = normalisedValue;
    setVolume(normalisedValue);
    console.log("volume Normalised value", normalisedValue);
  };

  const handleSkip = (seconds) => {
    const audioElement = audioRef.current;
    audioElement.currentTime += seconds;
  };
  const [isVolumeSliderVisible, setVolumeSliderVisible] = useState(false);

  const toggleVolumeSlider = () => {
    setVolumeSliderVisible(!isVolumeSliderVisible);
  };

  const AudioPlayerBackgroundColor =
    theme.palette.mode === "dark" ? "#1e1e1e" : "#fff";

  const handleFav = () => {
    if (isSongInFavorites(song, favouriteSongs)) {
      dispatch(removeFavorite(song));
      console.log("song removed from favorite");
    } else {
      dispatch(addFavorite(song));
      console.log("song added to favorite");
    }
  };

  return (
    <div
      className="audio-player-bar"
      style={{
        position: "fixed",
        width: "100%",
        height: "100px",
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
        autoPlay
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "100px",
          marginBottom: "50px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar alt="Song Avatar" src={song.thumbnail} />
          <div style={{ marginLeft: "16px" }}>
            <Typography variant="subtitle1">{song?.title}</Typography>
          </div>
          <div style={{ marginLeft: "auto" }}>
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
            flex: 2,
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
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          {isVolumeSliderVisible && (
            <div
              style={{
                position: "absolute",
                bottom: "80%", // Position below the volume icon
                left: "50%", // Center horizontally
                transform: "translateX(-50%)", // Center horizontally
                zIndex: 9999, // Set a high z-index to appear over other elements
              }}
            >
              <Slider
                value={volume * 100}
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
          <IconButton onClick={toggleVolumeSlider}>
            <VolumeUpIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
