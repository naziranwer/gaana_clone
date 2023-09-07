// import React, { useState } from "react";
// import { InputBase, IconButton, useTheme } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled } from "@mui/system";
// import SideNavbar from "./SideNav";

// const SearchContainer = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
//   borderRadius: "40px",
//   width: "450px",
//   maxWidth: "1000px", // Limit the maximum width for responsiveness
//   margin: "0 auto", // Center the search bar horizontally
//   height: "40px",
// }));

// const SearchIconContainer = styled("div")({
//   padding: "8px",
//   display: "flex",
//   alignItems: "center",
// });

// const SearchInput = styled(InputBase)(({ theme }) => ({
//   padding: "8px",
//   width: "100%",
//   border: "none", // Remove border
//   "&::placeholder": {
//     opacity: 0.7, // Reduce the opacity of the placeholder text
//     fontSize: "8px",
//     fontWeight: "normal",
//     color: theme.palette.mode === "dark" ? "#fff" : "#555", // Change placeholder color in dark mode
//   },
//   color: theme.palette.mode === "dark" ? "#fff" : "#555", // Change text color in dark mode
// }));

// const SearchBar = () => {
//   const theme = useTheme();
//   const [searchCardOpen, setSearchCardOpen] = useState(false);

//   const toggle = () => {
//     setSearchCardOpen(!searchCardOpen);
//   };

//   return (
//     <>
//       <SearchContainer>
//         <SearchIconContainer>
//           <IconButton aria-label="search">
//             <SearchIcon />
//           </IconButton>
//         </SearchIconContainer>
//         <SearchInput
//           placeholder="Search Artists, Songs, Albums"
//           inputProps={{ "aria-label": "search" }}
//           onFocus={() => toggle()}
//         />
//       </SearchContainer>
//     </>
//   );
// };

// export default SearchBar;

import React, { useState } from "react";
import { InputBase, IconButton, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import SideNavbar from "./SideNav";

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative", // Make the container a positioning context
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
  borderRadius: "40px",
  width: "450px",
  maxWidth: "1000px", // Limit the maximum width for responsiveness
  margin: "0 auto", // Center the search bar horizontally
  height: "40px",
}));

const SearchIconContainer = styled("div")({
  padding: "8px",
  display: "flex",
  alignItems: "center",
});

const SearchInput = styled(InputBase)(({ theme }) => ({
  padding: "8px",
  width: "100%",
  border: "none", // Remove border
  "&::placeholder": {
    opacity: 0.7, // Reduce the opacity of the placeholder text
    fontSize: "8px",
    fontWeight: "normal",
    color: theme.palette.mode === "dark" ? "#fff" : "#555", // Change placeholder color in dark mode
  },
  color: theme.palette.mode === "dark" ? "#fff" : "#555", // Change text color in dark mode
}));

const SearchResultsBox = styled("div")({
  position: "absolute",
  top: "100%", // Position just below the search input
  left: 0,
  width: "100%",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  zIndex: 1, // Ensure the box is above other content
  display: "none", // Initially hide the box
});

const SearchBar = () => {
  const theme = useTheme();
  const [searchCardOpen, setSearchCardOpen] = useState(false);

  const toggle = () => {
    setSearchCardOpen(!searchCardOpen);
  };
  console.log("searchCardOpen", searchCardOpen);
  return (
    <>
      <SearchContainer>
        <SearchIconContainer>
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
        </SearchIconContainer>
        <SearchInput
          placeholder="Search Artists, Songs, Albums"
          inputProps={{ "aria-label": "search" }}
          onFocus={() => toggle()}
        />
        {/* Display the search results box when searchCardOpen is true */}
        {searchCardOpen && (
          <SearchResultsBox>
            {/* Add your search results content here */}
            Search results go here
          </SearchResultsBox>
        )}
      </SearchContainer>
    </>
  );
};

export default SearchBar;
