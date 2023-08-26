// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
// } from "@mui/material";

// const ArtistDetails = () => {
//   const location = useLocation();
//   const artist = location.state;
//   const [musicData, setMusicData] = useState([]);

//   useEffect(() => {
//     fetch("https://academics.newtonschool.co/api/v1/music/song", {
//       headers: {
//         projectId: "9cwb93cdi4mj",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setMusicData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const songsArray = musicData?.data;

//   console.log("whole music list", songsArray);

//   const [currentSongIndex, setCurrentSongIndex] = useState(null);

//   console.log("albumdetails", artist);

//   const artistSongs = artist.songs;
//   const albumArtist = artist.artists;

//   const songsInArtist = artistSongs.map((id) => {
//     return songsArray?.find((song) => song._id === id);
//   });

//   console.log("matched songs", songsInArtist);

//   return (
//     <div style={{ margin: "30px" }}>
//       <Card>
//         <div style={{ display: "flex" }}>
//           <CardMedia
//             component="img"
//             height="300"
//             image={artist.image}
//             alt={artist.name}
//             style={{ flex: 1 }}
//           />
//           <CardContent style={{ flex: 2 }}>
//             <Typography variant="h5" gutterBottom>
//               {artist.name}
//             </Typography>
//             <Typography variant="h3">{artist.name}</Typography>
//             {/* Add more artist details here */}
//             <Typography variant="h6">{artist.description}</Typography>
//           </CardContent>
//         </div>
//       </Card>

//       <List>
//         {songsInArtist?.map((song, index) => (
//             const artistsNameArray = song?.artists?.filter((artist) => artist.name !== null).join(", ");
//           <ListItem key={song?._id}>
//             <ListItemText
//               primary={song?.title}
//                 secondary={artistNamesArray[index]}
//             />
//             {song && (
//               <audio controls>
//                 <source src={song?.audio_url} type="audio/mp4" />
//               </audio>
//             )}
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default ArtistDetails;

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
} from "@mui/material";

const ArtistDetails = () => {
  const location = useLocation();
  const artist = location.state;
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    fetch("https://academics.newtonschool.co/api/v1/music/song", {
      headers: {
        projectId: "9cwb93cdi4mj",
      },
    })
      .then((response) => response.json())
      .then((data) => setMusicData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const songsArray = musicData?.data;

  console.log("whole music list", songsArray);

  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  console.log("albumdetails", artist);

  const artistSongs = artist.songs;
  const albumArtist = artist.artists;

  const songsInArtist = artistSongs.map((id) => {
    return songsArray?.find((song) => song._id === id);
  });

  console.log("matched songs", songsInArtist);

  return (
    <div style={{ margin: "30px" }}>
      <Card>
        <div style={{ display: "flex" }}>
          <CardMedia
            component="img"
            height="300"
            image={artist.image}
            alt={artist.name}
            style={{ flex: 1 }}
          />
          <CardContent style={{ flex: 2 }}>
            <Typography variant="h5" gutterBottom>
              {artist.name}
            </Typography>
            <Typography variant="h3">{artist.name}</Typography>
            {/* Add more artist details here */}
            <Typography variant="h6">{artist.description}</Typography>
          </CardContent>
        </div>
      </Card>

      <List>
        {songsInArtist?.map((song, index) => {
          const artistsNameArray = song?.artist
            ?.map((artist) => artist.name)
            .join(", ");

          return (
            <ListItem key={song?._id}>
              <ListItemText
                primary={song?.title}
                secondary={artistsNameArray}
              />
              {song && (
                <audio controls>
                  <source src={song?.audio_url} type="audio/mp4" />
                </audio>
              )}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ArtistDetails;
