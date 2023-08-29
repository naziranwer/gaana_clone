// import React, { useState, useEffect, useRef } from "react";
// // import Button from "./Button";
// import letScrollIcon from "./assets/left-scroll.svg";
// import rightScrollIcon from "./assets/right-scroll.svg";
// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
// } from "@mui/material";
// import "./Album.css"; // Import your custom CSS file for styling
// import { useNavigate } from "react-router-dom";
// // import store from "../utils/store";
// // import { useSelector } from "react-redux";
// // import { CATEGORIES_API } from "../utils/constants";

// const btnList = [
//   "All",
//   "Gaming",
//   "Songs",
//   "Live",
//   "Cricket",
//   "News",
//   "Bollywood",
//   "Computer",
//   "Scene",
//   "Mixes",
//   "History",
//   "programming",
//   "Hollywood",
//   "React",
//   "Redux",
//   "Computer",
//   "Next",
//   "Nest",
//   "Node",
//   "All",
//   "Gaming",
//   "Songs",
//   "Live",
//   "Cricket",
//   "News",
//   "Bollywood",
//   "Computer",
//   "Scene",
//   "Mixes",
//   "History",
//   "programming",
//   "Hollywood",
//   "React",
//   "Redux",
//   "Computer",
//   "Next",
//   "Nest",
//   "Node",
// ];

// const ButtonList = () => {
//   // const [btnList, setbtnList] = useState([]);

//   // const getList = async () => {
//   //   await fetch("https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4")
//   //     .then((data) => data.json())
//   //     .then((response) => {
//   //       console.log(response);
//   //       setbtnList(response?.items);
//   //     });
//   // };

//   // useEffect(() => {
//   //   getList();
//   // }, []);

//   //   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

//   const scrollRef = useRef(null);

//   const prev = () => {
//     requestAnimationFrame(() => {
//       const scrollLeft = scrollRef.current.scrollLeft;
//       const itemWidth = parseInt(
//         getComputedStyle(scrollRef.current.children[0]).width
//       );
//       scrollRef.current.scrollLeft = scrollLeft - itemWidth * 3;
//     });
//   };

//   const next = () => {
//     requestAnimationFrame(() => {
//       const scrollLeft = scrollRef.current.scrollLeft;
//       const itemWidth = parseInt(
//         getComputedStyle(scrollRef.current.children[0]).width
//       );
//       scrollRef.current.scrollLeft = scrollLeft + itemWidth * 3;
//     });
//   };

//   const [artistData, setArtistData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://academics.newtonschool.co/api/v1/music/artist", {
//       headers: {
//         projectId: "9cwb93cdi4mj",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setArtistData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const artistList = artistData.data || [];
//   console.log("artists list", artistList);

//   const artistClick = (artist) => {
//     navigate(`/artist/${artist.name}`, { state: artist });
//     console.log("navigation for artist");
//   };

//   return (
//     <div className="flex ">
//       <button
//         onClick={prev}
//         className="hover:rounded-full w-10 h-10 mr-2 hover:bg-gray-100 fixed z-50"
//       >
//         <img alt="leftScrollBtn" className="inline-block" src={letScrollIcon} />
//       </button>

//       {/* <div
//           ref={scrollRef}
//           className="max-w-[86%] overflow-x-hidden flex mx-12"
//         >
//           {btnList?.map((btnName, index) => {
//             return <Button key={index} name={btnName} />;
//           })}
//         </div>
//        :  */}
//       <Box ref={scrollRef} overflow="hidden">
//         {/* {btnList?.map((btnName, index) => { */}
//         <Grid container spacing={2} className="album-grid">
//           {artistList?.map((artist) => {
//             return (
//               // <button key={index} name={btnName}>
//               //   {btnName}
//               // </button>

//               <Grid
//                 item
//                 key={artist._id}
//                 xs={6}
//                 sm={4}
//                 md={3}
//                 lg={2}
//                 onClick={() => artistClick(artist)}
//               >
//                 <Card>
//                   <CardMedia
//                     component="img"
//                     height="140"
//                     image={artist.image}
//                     alt={artist.name}
//                   />
//                   <CardContent>
//                     <Typography variant="subtitle1">
//                       {artist.name.slice(0, 15)}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             );
//           })}
//         </Grid>

//         {/* })} */}
//       </Box>

//       <button
//         onClick={next}
//         className="hover:rounded-full w-10 h-10 ml-2 right-20 hover:bg-gray-100 fixed z-50 "
//       >
//         <img
//           alt="rightScrollBtn"
//           className="inline-block"
//           src={rightScrollIcon}
//         />
//       </button>
//     </div>
//   );
// };

// export default ButtonList;

import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import letScrollIcon from "./assets/left-scroll.svg";
import rightScrollIcon from "./assets/right-scroll.svg";
import "./Album.css"; // Import your custom CSS file for styling
import { useNavigate } from "react-router-dom";

const ButtonList = () => {
  const scrollRef = useRef(null);
  const itemWidth = 20; // Width of each item card
  const itemsToShow = 5; // Number of items to show at a time
  const [visibleRange, setVisibleRange] = useState({
    startIndex: 0,
    endIndex: itemsToShow,
  });

  const scrollBy = (direction) => {
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const newPosition =
      direction === "prev"
        ? Math.max(scrollLeft - itemWidth * itemsToShow, 0)
        : Math.min(
            scrollLeft + itemWidth * itemsToShow,
            container.scrollWidth - container.clientWidth
          );

    const maxScrollPosition = (artistList.length - itemsToShow) * itemWidth;
    const finalPosition = Math.min(newPosition, maxScrollPosition);

    container.scrollTo({
      left: finalPosition,
      behavior: "smooth",
    });

    // Using the prevState form of setState to ensure synchronization
    setVisibleRange((prevState) => ({
      startIndex: Math.floor(finalPosition / itemWidth),
      endIndex: Math.min(prevState.startIndex + itemsToShow, artistList.length),
    }));
  };
  console.log(
    "start and end index",
    visibleRange.startIndex,
    visibleRange.endIndex
  );

  // Rest of your component code...

  const [artistData, setArtistData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://academics.newtonschool.co/api/v1/music/artist", {
      headers: {
        projectId: "9cwb93cdi4mj",
      },
    })
      .then((response) => response.json())
      .then((data) => setArtistData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const artistList = artistData.data || [];
  console.log("artists list", artistList);

  const artistClick = (artist) => {
    navigate(`/artist/${artist.name}`, { state: artist });
    console.log("navigation for artist");
  };

  return (
    <div className="flex ">
      <button
        onClick={() => scrollBy("prev")}
        className="hover:rounded-full w-10 h-10 mr-2 hover:bg-gray-100 fixed z-50"
      >
        <img alt="leftScrollBtn" className="inline-block" src={letScrollIcon} />
      </button>

      <Box ref={scrollRef} overflow="hidden">
        <Grid container spacing={2} className="album-grid">
          {artistList?.map((artist, index) => {
            if (
              index >= visibleRange.startIndex &&
              index < visibleRange.endIndex
            ) {
              return (
                <Grid
                  item
                  key={artist._id}
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  onClick={() => artistClick(artist)}
                >
                  {/* Your card content */}
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={artist.image}
                      alt={artist.name}
                    />
                    <CardContent>
                      <Typography variant="subtitle1">
                        {artist.name.slice(0, 15)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
            return null;
          })}
        </Grid>
      </Box>

      <button
        onClick={() => scrollBy("next")}
        className="hover:rounded-full w-10 h-10 ml-2 right-20 hover:bg-gray-100 fixed z-50 "
      >
        <img
          alt="rightScrollBtn"
          className="inline-block"
          src={rightScrollIcon}
        />
      </button>
    </div>
  );
};

export default ButtonList;
