import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./Album.css";
import { useDispatch } from "react-redux";
import { setOneSongData } from "../Redux/actions";

const MusicCard = ({ data }) => {
  const dispatch = useDispatch();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (e) => {
    dispatch(setOneSongData(e));
    console.log("music card clicked and dispatched song", e);
  };

  console.log("hovered index", hoveredIndex);
  return (
    <div>
      <Grid container spacing={2} className="album-grid">
        {data?.map((song) => (
          <Grid
            item
            key={song.id}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            onClick={() => handleClick(song)}
            style={{ cursor: "pointer" }}
          >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={song.thumbnail}
                alt={song.title}
              />
              <CardContent>
                <Typography variant="subtitle1">
                  {song.title.slice(0, 15)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MusicCard;
