import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemAvatar,
  Avatar,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setOneSongData, setIsPlaying } from "../Redux/actions";

export const AlbumDetails = () => {
  const location = useLocation();
  const album = location.state;
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.audio.isPlaying);
  const songInPlayer = useSelector((state) => state.songReducer);

  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  console.log("albumdetails", album);
  const albumSongs = album?.songs;
  const albumArtist = album?.artists;

  const artistNamesArray = albumSongs.map((song) => {
    const artistNames = song.artist.map((art) => {
      const matchingArtist = albumArtist.find(
        (artistss) => artistss._id === art
      );
      return matchingArtist ? matchingArtist.name : null;
    });
    return artistNames.filter((name) => name !== null).join(", ");
  });

  const handleSongClick = (e) => {
    dispatch(setOneSongData(e));
    // const audioElement = audioRef.current;
  };

  return (
    <div style={{ margin: "30px" }}>
      <Card>
        <div style={{ display: "flex" }}>
          <CardMedia
            component="img"
            height="300"
            image={album.image}
            alt={album.title}
            style={{ flex: 1 }}
          />
          <CardContent style={{ flex: 2 }}>
            <Typography variant="h5" gutterBottom>
              {album.title} | {album.artists[0].name}
            </Typography>
            <Typography variant="h3">{album.title}</Typography>
            {/* Add more album details here */}
          </CardContent>
        </div>
      </Card>

      <List>
        {albumSongs.map((song, index) => (
          // <ListItem key={song._id} onClick={() => handleSongClick(song)}>
          //   <ListItemAvatar>
          //     <Avatar src={song.thumbnail} alt={song.title} />

          //     <IconButton
          //       style={{
          //         position: "absolute",
          //         backgroundColor: "white",
          //         borderRadius: "50%",
          //         top: "50%",
          //         left: "50%",
          //         transform: "translate(-50%, -50%)",
          //       }}
          //     >
          //       <PlayArrow style={{ color: "black" }} />{" "}
          //     </IconButton>
          //   </ListItemAvatar>
          //   <ListItemText
          //     primary={song.title}
          //     secondary={artistNamesArray[index]}
          //   />
          // </ListItem>

          <ListItem key={song._id} onClick={() => handleSongClick(song)}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar src={song.thumbnail} alt={song.title} />
              </Grid>
              <Grid item xs={6}>
                <ListItemText
                  primary={song.title}
                  secondary={artistNamesArray[index]}
                />
              </Grid>
              <Grid item>
                <IconButton
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                >
                  {isPlaying && song._id === songInPlayer._id ? (
                    <Pause style={{ color: "black" }} />
                  ) : (
                    <PlayArrow style={{ color: "black" }} />
                  )}
                </IconButton>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
