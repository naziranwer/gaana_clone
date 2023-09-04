import React from "react";
import { Container, Typography, Link, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();

  const headerBackgroundColor =
    theme.palette.mode === "dark" ? "#1e1e1e" : "#fff";

  return (
    <section
      style={{
        backgroundColor: headerBackgroundColor,
        marginTop: "20px",
        padding: "10px 0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <nav
          style={{
            display: "flex",
            gap: "20px", // Adjust this value to control the gap between links
          }}
        >
          <Link href="#" color="inherit">
            All
          </Link>
          <Link href="#" color="inherit">
            Trending Songs
          </Link>
          <Link href="#" color="inherit">
            New Songs
          </Link>
          <Link href="#" color="inherit">
            Old Songs
          </Link>
          <Link href="#" color="inherit">
            Moods and Genres
          </Link>
          <Link href="#" color="inherit">
            Albums
          </Link>
          <Link href="#" color="inherit">
            Radio
          </Link>
          <Link href="#" color="inherit">
            Podcast
          </Link>
          <Link href="#" color="inherit">
            My Music
          </Link>
        </nav>
      </Container>
    </section>
  );
};

export default Header;
