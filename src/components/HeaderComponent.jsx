import React, { useState } from "react";
import {
  Container,
  Typography,
  Link,
  useTheme,
  styled,
  Popover,
  Paper,
  List,
  ListItem,
} from "@mui/material";

// const StyledLink = styled(Link)(({ theme }) => ({
//   textDecoration: "none", // Remove underline by default
//   color: "inherit", // Inherit text color from parent element
//   "&:hover": {
//     textDecoration: "underline", // Add underline on hover
//     textDecorationColor: "red", // Customize the underline color
//   },
// }));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none", // Remove underline by default
  color: "inherit", // Inherit text color from parent element
  position: "relative", // Required for pseudo-element positioning
  "&::before": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px", // Adjust the thickness of the underline
    bottom: "0",
    left: "0",
    background: "#DD062F", // Customize the underline color
    transition: "width 0.3s ease", // Transition effect for width
  },
  "&:hover::before": {
    width: "100%", // Expand the underline on hover
  },
  // fontWeight: "bold", // Make the text bold
  transition: "font-weight 0.3s ease", // Transition effect for font-weight
}));

const FirstLink = styled(StyledLink)({
  "&::before": {
    width: "100%", // Set a fixed width for the underline
    transition: "none", // Remove transition on hover
  },
});

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <StyledLink
        href="#"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
      >
        Moods and Genres
      </StyledLink>
      <Popover
        id="dropdown-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper>
          <List>
            <ListItem>
              <Link href="#">Option 1</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Option 2</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Option 3</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Option 4</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Option 5</Link>
            </ListItem>
          </List>
        </Paper>
      </Popover>
    </>
  );
};

const Header = () => {
  const theme = useTheme();

  return (
    <section
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
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
            gap: "20px",
          }}
        >
          <FirstLink href="/musiclist">All</FirstLink>
          <StyledLink href="/featured">Trending Songs</StyledLink>
          <StyledLink href="/newrelease">New Songs</StyledLink>
          <StyledLink href="/musiclist">Old Songs</StyledLink>
          {/* <DropdownMenu /> */}
          <StyledLink href="albums">Albums</StyledLink>
          <StyledLink href="/musiclist">Radio</StyledLink>
          <StyledLink href="/musiclist">Podcast</StyledLink>
          <StyledLink href="/favourite">My Music</StyledLink>
        </nav>
      </Container>
    </section>
  );
};

export default Header;
