import React from "react";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const SearchContainer = styled("div")({
  position: "relative",
  backgroundColor: "#fff",
});

const SearchIconContainer = styled("div")({
  padding: "8px",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SearchInput = styled(InputBase)({
  padding: "8px",
  paddingLeft: "40px", // Adjust this value to your needs
  width: "100%",
});

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      <SearchInput
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
      />
    </SearchContainer>
  );
};

export default SearchBar;
