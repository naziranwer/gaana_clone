// NotFound.js
import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      maxWidth="md"
      style={{ textAlign: "center", marginTop: "100px" }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for might have been removed or doesn't exist.
      </Typography>
      <Button
        style={{ backgroundColor: "#E72C30" }}
        variant="contained"
        color="primary"
        component={Link}
        to="/"
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
