import React, { useState, useRef, useEffect } from "react";
import { InputBase, IconButton, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../Redux/actions";
import SearchMusicCard from "./SearchMusicCard";

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
  borderRadius: "40px",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
  height: "40px",
  [theme.breakpoints.up("md")]: {
    width: "450px",
  },
}));

const SearchIconContainer = styled("div")({
  padding: "8px",
  display: "flex",
  alignItems: "center",
});

const SearchInput = styled(InputBase)(({ theme }) => ({
  padding: "8px",
  width: "100%",
  border: "none",
  "&::placeholder": {
    opacity: 0.7,
    fontSize: "8px",
    fontWeight: "normal",
    color: theme.palette.mode === "dark" ? "#fff" : "#555",
  },
  color: theme.palette.mode === "dark" ? "#fff" : "#555",
}));

const SearchResultsBox = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  backgroundColor: theme.palette.mode === "dark" ? "#555" : "#fff",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  zIndex: 1,
  display: "block",
  height: "300px",
  overflowY: "auto",
}));

const SearchBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [searchCardOpen, setSearchCardOpen] = useState(false);
  const musicData = useSelector((state) => state.musicData);
  const searchedTerm = useSelector((state) => state.searchTerm);
  const searchContainerRef = useRef(null);

  const handleFocus = () => {
    setSearchCardOpen(true);
  };

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const SearchedSongs =
    musicData?.data?.filter((song) =>
      song.title.toLowerCase().includes(searchedTerm.toLowerCase())
    ) || [];

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!searchContainerRef.current.contains(e.target)) {
        setSearchCardOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <SearchContainer ref={searchContainerRef}>
        <SearchIconContainer>
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
        </SearchIconContainer>
        <SearchInput
          placeholder="Search Artists, Songs, Albums"
          inputProps={{ "aria-label": "search" }}
          onFocus={handleFocus}
          onChange={(e) => handleChange(e)}
        />
        {searchCardOpen && (
          <SearchResultsBox>
            {searchedTerm === "" && (
              <div
                style={{
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#fff" : "#555",
                }}
              >
                Recent Searches
              </div>
            )}
            <SearchMusicCard data={SearchedSongs} />
          </SearchResultsBox>
        )}
      </SearchContainer>
    </>
  );
};

export default SearchBar;
