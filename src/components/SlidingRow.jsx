import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import "./Album.css"; // Import your custom CSS file for styling
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOneSongData } from "../Redux/actions";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";

const responsive = {
  largeMonitor: {
    breakpoint: { max: 3000, min: 1500 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  smartphone: {
    breakpoint: { max: 824, min: 464 },
    items: 2.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.4,
  },
};
const SlidingRow = ({ array, heading, path }) => {
  // eslint-disable-next-line no-unused-vars

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const itemClick = (item) => {
    dispatch(setOneSongData(item));
  };

  const navigation = () => {
    navigate(path);
    console.log("navigation for new release");
  };

  // const hoverStyles = {
  //   color: "red", // Change to the desired hover color
  //   fontSize: "80%", // Change to the desired hover font size
  //   cursor: "pointer", // Change to indicate it's clickable
  // };

  return (
    <>
      <div className="container1">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>{heading}</h1>
          <span
            style={{
              marginTop: "auto",
              cursor: "pointer",
              color: "red",
              transition: "color 0.3s, font-size 0.3s", // Add transition for a smooth effect
              fontSize: "16px", // Set the initial font size
            }}
            onMouseOver={(e) => {
              e.target.style.color = "lightcoral"; // Change color on hover
              e.target.style.fontSize = "14px"; // Decrease font size on hover
            }}
            onMouseOut={(e) => {
              e.target.style.color = "red"; // Reset color on mouse out
              e.target.style.fontSize = "16px"; // Reset font size on mouse out
            }}
            onClick={navigation}
          >
            See All
          </span>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px custom-carousel-item"
        >
          {/* <Grid container spacing={2}> */}
          {array?.map((item) => (
            <Grid
              item
              key={item._id}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              onClick={() => itemClick(item)}
              onMouseEnter={() => setHoveredIndex(item._id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card style={{ cursor: "pointer" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.thumbnail}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="subtitle1">
                    {item.title.slice(0, 15)}
                  </Typography>
                  {hoveredIndex === item._id && (
                    <div className="play-icon-container">
                      {/* Add your play icon here */}
                      {/* <span className="play-icon"><PlayCircleFilledOutlinedIcon/></span> */}
                      <span className="play-icon">▶</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
          {/* </Grid> */}
        </Carousel>
      </div>
    </>
  );
};

export default SlidingRow;
