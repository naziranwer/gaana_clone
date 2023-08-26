import React from "react";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const SearchContainer = styled("div")({
  position: "relative",
  width: "500px",
  height: "40px",
  backgroundColor: "#fff",
  borderRadius: "40px",
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
  // paddingLeft: "40px",
  width: "100%",
});

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      <SearchInput
        placeholder="Search Artists,Songs,Albums"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchContainer>
  );
};

export default SearchBar;
