import React from "react";
import { InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "40px",
  width: "450px",
  maxWidth: "1000px", // Limit the maximum width for responsiveness
  margin: "0 auto", // Center the search bar horizontally
  height: "40px",
});

const SearchIconContainer = styled("div")({
  padding: "8px",
  display: "flex",
  alignItems: "center",
});

const SearchInput = styled(InputBase)({
  padding: "8px",
  width: "100%",
  border: "none", // Remove border
  "&::placeholder": {
    opacity: 0.7, // Reduce the opacity of the placeholder text
    fontSize: "14px",
    fontWeight: "normal",
  },
});

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIconContainer>
        <IconButton aria-label="search">
          <SearchIcon />
        </IconButton>
      </SearchIconContainer>
      <SearchInput
        placeholder="Search Artists, Songs, Albums"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchContainer>
  );
};

export default SearchBar;
