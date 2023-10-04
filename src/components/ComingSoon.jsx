// src/ComingSoonPage.js
import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import comingSoonImage from "./assets/comingsoon.png";

const ComingSoonPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        padding: "20px",
        marginTop: "100px", // Adjusted marginTop to avoid overlapping with the header
        marginBottom: "50px", // Adjusted marginBottom to avoid overlapping with the footer
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          p: 4,
        }}
      >
        {/* Display the Coming Soon image */}
        <img
          src={comingSoonImage}
          alt="Coming Soon"
          style={{ width: "50%", height: "auto", marginBottom: "20px" }}
        />

        <Typography variant="h2" component="h1" gutterBottom>
          Coming Soon!
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          We are working hard to bring you something amazing.
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        sx={{ width: "50%", marginTop: "10px", backgroundColor: "#E72C30" }}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default ComingSoonPage;
