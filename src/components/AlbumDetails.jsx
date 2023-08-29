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
} from "@mui/material";

export const AlbumDetails = () => {
  const location = useLocation();
  const album = location.state;

  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  console.log("albumdetails", album);
  const albumSongs = album.songs;
  const albumArtist = album.artists;

  const artistNamesArray = albumSongs.map((song) => {
    const artistNames = song.artist.map((art) => {
      const matchingArtist = albumArtist.find(
        (artistss) => artistss._id === art
      );
      return matchingArtist ? matchingArtist.name : null;
    });
    return artistNames.filter((name) => name !== null).join(", ");
  });

  const handlePlayClick = (index) => {
    setCurrentSongIndex(index);
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
          <ListItem key={song._id}>
            <ListItemText
              primary={song.title}
              secondary={artistNamesArray[index]}
            />
            {song && (
              // <audio controls>
              //   <source src={song?.audio_url} type="audio/mp4" />
              // </audio>
              <AudioPlayer song={song} />
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
