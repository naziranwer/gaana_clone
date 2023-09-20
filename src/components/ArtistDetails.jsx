import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  IconButton,
} from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import AudioPlayer from "./AudioPlayer";
import { useDispatch } from "react-redux";
import { setOneSongData } from "../Redux/actions";

const ArtistDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const artist = location.state;
  const artistId = artist._id;

  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    fetch(`https://academics.newtonschool.co/api/v1/music/artist/${artistId}`, {
      headers: {
        projectId: "9cwb93cdi4mj",
      },
    })
      .then((response) => response.json())
      .then((data) => setArtistData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSongClick = (e) => {
    dispatch(setOneSongData(e));
  };

  const songsInArtist = artistData?.data?.songs;

  console.log("matched songs", songsInArtist);

  return (
    // <h1>hiii</h1>
    <div style={{ margin: "30px" }}>
      <Card>
        <div style={{ display: "flex" }}>
          <CardMedia
            component="img"
            height="300"
            image={artist?.image}
            alt={artist?.name}
            style={{ flex: 1 }}
          />
          <CardContent style={{ flex: 2 }}>
            <Typography variant="h5" gutterBottom>
              {artist.name}
            </Typography>
            <Typography variant="h3">{artist?.name}</Typography>
            {/* Add more artist details here */}
            <Typography variant="h8">{artist?.description}</Typography>
          </CardContent>
        </div>
      </Card>

      <List>
        {songsInArtist?.map((song, index) => {
          //       // const artistsNameArray = song?.artist
          //       //   ?.map((artist) => artist?.name)
          //       //   .join(", ");

          return (
            // <ListItem key={song?._id}>
            //   <ListItemAvatar>
            //     {/* Add your song image here */}
            //     <Avatar src={song.thumbnail} alt={song.title} />
            //     {/* Add a white color icon over the image */}
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
            //       {/* Adjust icon color */}
            //     </IconButton>
            //   </ListItemAvatar>
            //   <ListItemText
            //     primary={song?.title}
            //     // secondary={artistsNameArray}
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
                    // secondary={artistNamesArray[index]}
                  />
                </Grid>
                <Grid item>
                  <IconButton
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  >
                    <PlayArrow style={{ color: "black" }} />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
          );
        })}
        {/* <AudioPlayer song={songsInArtist[0]} /> */}
      </List>
    </div>
  );
};

export default ArtistDetails;
