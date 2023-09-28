import React, { useState } from "react";

import subscriptionImage from "./assets/subscription.png";
import { Link, Outlet } from "react-router-dom";

const Subscription = () => {
  // State to track selected subscription duration
  const [selectedDuration, setSelectedDuration] = useState(null);

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  // const handleBuyNowClick = () => {
  //   // Handle the "BUY NOW" button click action here
  //   if (selectedDuration) {
  //     alert(`You have selected ${selectedDuration}`);
  //     // You can add further logic here, such as navigating to a payment page.
  //   } else {
  //     alert("Please select a subscription duration before proceeding.");
  //   }
  // };

  const containerStyle = {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle = {
    height: "25vh",
    width: "108%",
    padding: "2px",
  };

  const checkboxContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "45px",
  };

  const checkboxBoxStyle = {
    border: "5px solid white",
    color: "orange",
    padding: "10px",
    marginBottom: "10px",
    width: "30%",
    borderRadius: "15px", // Add border radius
    display: "flex",
    alignItems: "center", // Center text vertically
    justifyContent: "center", // Center text horizontally
  };

  const checkboxLabelStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  // const buttonStyle = {
  //   padding: "10px 45px", // Adjust padding as needed
  //   fontSize: "16px",
  //   backgroundColor: "red",
  //   color: "white",
  //   border: "none",
  //   borderRadius: "35px",
  //   marginTop: "px",
  //   cursor: "pointer",
  // };

  return (
    <div style={containerStyle}>
      <br />
      <br />
      <br />
      <img src={subscriptionImage} alt="Image Alt Text" style={imageStyle} />
      <div className="plan-option" style={checkboxContainerStyle}>
        {/* Checkbox for 1 month */}
        <div style={checkboxBoxStyle}>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="duration"
              value="1month"
              checked={selectedDuration === "1month"}
              onChange={() => handleDurationChange("1month")}
            />
            1 Month Gaana Plus Gaana Plus &#8377;99
          </label>
        </div>
        {/* Checkbox for 6 months */}
        <div style={checkboxBoxStyle}>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="duration"
              value="6months"
              checked={selectedDuration === "6months"}
              onChange={() => handleDurationChange("6months")}
            />
            6 Months Gaana Plus Gaana Plus &#8377;249
          </label>
        </div>
        {/* Checkbox for 1 Year */}
        <div style={checkboxBoxStyle}>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="duration"
              value="1Year"
              checked={selectedDuration === "1Year"}
              onChange={() => handleDurationChange("1Year")}
            />
            1 Year Gaana Plus Gaana Plus &#8377;299
          </label>
        </div>
      </div>
      <div style={{ textAlign: "center" }}></div>
      <Link to="/payment">
        <button
          style={{
            backgroundColor: "#E72C30",
            borderRadius: "20px",
            padding: "25x 30px",
            margin: "40px 6px 6px",
            width: "120px",
            height: "30px",
            cursor: "pointer",
          }}
          // className={theme.palette.mode === "dark" ? "gplusdark" : "gplus mr60"}
        >
          BUY NOW
        </button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Subscription;
