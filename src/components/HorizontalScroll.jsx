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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
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
const Horizontal = ({ array }) => {
  // eslint-disable-next-line no-unused-vars
  const [artistData, setArtistData] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://academics.newtonschool.co/api/v1/music/item", {
  //     headers: {
  //       projectId: "9cwb93cdi4mj",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setArtistData(data.data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // const artistClick = (item) => {
  //   navigate(`/item/${item.title}`, { state: item });
  //   console.log("navigation for item");
  // };
  console.log("horizontal scroll for featured ", array);

  return (
    <>
      <div className="container1">
        {/* <h2>Featured Artists</h2> */}
        {array?.length > 0 ? (
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
                // onClick={() => artistClick(item)}
              >
                <Card>
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
                  </CardContent>
                </Card>
              </Grid>
            ))}
            {/* </Grid> */}
          </Carousel>
        ) : (
          <div>No Content</div>
        )}
      </div>
    </>
  );
};

export default Horizontal;
