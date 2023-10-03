import React, { useState } from "react";
import subscriptionImage from "./assets/subscription.png";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, Box } from "@mui/material";
import { toast } from "react-toastify";

const Subscription = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const handleSubsc = () => {
    if (selectedDuration !== null) {
      navigate("/payment", { state: selectedDuration });
    } else toast.error("Please select any checkbox");
  };

  const storedDuration = localStorage.getItem(`${isLoggedIn?.data?.email}`);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={2}
    >
      <img
        src={subscriptionImage}
        alt="Image Alt Text"
        style={{ height: "35vh", width: "105%", padding: "2px" }}
      />

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        mt={3}
      >
        {/* Checkbox for 1 month */}
        <FormControlLabel
          control={
            <Checkbox
              name="duration"
              value="1month"
              checked={selectedDuration === "1month"}
              onChange={() => handleDurationChange("1month")}
              disabled={
                storedDuration === "1month" ||
                storedDuration === "6months" ||
                storedDuration === "1Year"
              }
            />
          }
          label="1 Month Gaana Plus Gaana Plus ₹99"
        />

        {/* Checkbox for 6 months */}
        <FormControlLabel
          control={
            <Checkbox
              name="duration"
              value="6months"
              checked={selectedDuration === "6months"}
              onChange={() => handleDurationChange("6months")}
              disabled={
                storedDuration === "6months" || storedDuration === "1Year"
              }
            />
          }
          label="6 Months Gaana Plus Gaana Plus ₹249"
        />

        {/* Checkbox for 1 Year */}
        <FormControlLabel
          control={
            <Checkbox
              name="duration"
              value="1Year"
              checked={selectedDuration === "1Year"}
              onChange={() => handleDurationChange("1Year")}
              disabled={storedDuration === "1Year"}
            />
          }
          label="1 Year Gaana Plus Gaana Plus ₹399"
        />
      </Box>

      <Button
        variant="contained"
        style={{
          backgroundColor: "#E72C30",
          borderRadius: "20px",
          padding: "10px 20px",
          margin: "20px 6px 6px",
          cursor: "pointer",
        }}
        onClick={handleSubsc}
      >
        SUBSCRIBE NOW
      </Button>
    </Box>
  );
};

export default Subscription;
