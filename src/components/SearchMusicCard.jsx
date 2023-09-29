import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "./Album.css";
import { useDispatch } from "react-redux";
import { setOneSongData } from "../Redux/actions";

const SearchMusicCard = ({ data }) => {
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleClick = (e) => {
    dispatch(setOneSongData(e));
    console.log("music card clicked and dispatched song", e);
  };

  // Define the number of columns based on screen size
  const columns = isSmallScreen ? 2 : 3; // Adjust the number of columns as needed

  return (
    <div>
      <Grid container spacing={2} className="album-grid">
        {data?.map((song) => (
          <Grid
            item
            key={song.id}
            xs={12} // Full width on extra small screens
            sm={6} // 2 cards per row on small screens
            md={4} // 3 cards per row on medium screens
            lg={columns} // 2 or 3 cards per row based on screen size
            onClick={() => handleClick(song)}
            className="music-card"
            style={{ cursor: "pointer" }}
          >
            <Card style={{ paddingBottom: "56.25%", height: "100px" }}>
              <CardMedia
                component="img"
                height="50"
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

export default SearchMusicCard;
