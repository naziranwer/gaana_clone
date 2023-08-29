import React, { useState, useRef } from "react";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import "../App.css";

const AudioPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);

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

  return (
    <div className="audio-player-bar">
      <audio
        ref={audioRef}
        src={song?.audio_url}
        onTimeUpdate={handleTimeUpdate}
      />
      <IconButton onClick={() => handleSkip(-10)}>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton onClick={togglePlay}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <IconButton onClick={() => handleSkip(10)}>
        <SkipNextIcon />
      </IconButton>
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
      <div>
        <IconButton>
          <VolumeDownIcon />
        </IconButton>
        <Slider
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
  );
};

export default AudioPlayer;
