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
import "../App.css";
import { useSelector } from "react-redux";

const AudioPlayer = () => {
  const song = useSelector((state) => state.songReducer);

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

  const handleVolumeChange = (event, newValue) => {
    const audioElement = audioRef.current;
    const normalisedValue = newValue / 100;
    audioElement.volume = normalisedValue;
    setVolume(normalisedValue);
  };

  const handleSkip = (seconds) => {
    const audioElement = audioRef.current;
    audioElement.currentTime += seconds;
  };
  const AudioPlayerBackgroundColor =
    theme.palette.mode === "dark" ? "#1e1e1e" : "#fff";

  return (
    <div
      className="audio-player-bar"
      style={{
        position: "fixed",
        width: "100%",
        height: "80px",
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
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "100px",
        }}
      >
        <div style={{ flex: 1 }}>
          <IconButton></IconButton>
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => handleSkip(-10)}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton onClick={togglePlay}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton onClick={() => handleSkip(10)}>
            <SkipNextIcon />
          </IconButton>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            // flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton>
            <VolumeDownIcon />
          </IconButton>
          <Slider
            orientation="vertical"
            value={volume * 100}
            onChange={handleVolumeChange}
            aria-label="volume slider"
            max={100}
          />
          <IconButton>
            <VolumeUpIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
