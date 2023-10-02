// import React, { useState } from "react";

// import subscriptionImage from "./assets/subscription.png";
// import { Link, Outlet, useNavigate } from "react-router-dom";

// const Subscription = () => {
//   // State to track selected subscription duration
//   const [selectedDuration, setSelectedDuration] = useState(null);
//   const isLoggedIn = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();

//   console.log("isLo", isLoggedIn);

//   const handleDurationChange = (duration) => {
//     setSelectedDuration(duration);
//   };

//   const containerStyle = {
//     // height: "50vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const imageStyle = {
//     height: "35vh",
//     width: "105%",
//     padding: "2px",
//   };

//   const checkboxContainerStyle = {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     marginTop: "45px",
//   };

//   const checkboxBoxStyle = {
//     border: "5px solid white",
//     color: "orange",
//     padding: "10px",
//     marginBottom: "10px",
//     width: "30%",
//     borderRadius: "15px", // Add border radius
//     display: "flex",
//     alignItems: "center", // Center text vertically
//     justifyContent: "center", // Center text horizontally
//   };

//   const checkboxLabelStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//   };

//   const handleSubsc = () => {
//     // localStorage.setItem(`${isLoggedIn.data.email}`, selectedDuration);
//     navigate("/payment", { state: selectedDuration });
//   };

//   const storedDuration = localStorage.getItem(`${isLoggedIn.data.email}`);

//   return (
//     <div style={containerStyle}>
//       <img src={subscriptionImage} alt="Image Alt Text" style={imageStyle} />
//       <div className="plan-option" style={checkboxContainerStyle}>
//         {/* Checkbox for 1 month */}
//         <div style={checkboxBoxStyle}>
//           <label style={checkboxLabelStyle}>
//             <input
//               type="checkbox"
//               name="duration"
//               value="1month"
//               checked={selectedDuration === "1month"}
//               onChange={() => handleDurationChange("1month")}
//               disabled={
//                 storedDuration === "1month" ||
//                 storedDuration === "6months" ||
//                 storedDuration === "1Year"
//               }
//             />
//             1 Month Gaana Plus Gaana Plus &#8377;99
//           </label>
//         </div>
//         {/* Checkbox for 6 months */}
//         <div style={checkboxBoxStyle}>
//           <label style={checkboxLabelStyle}>
//             <input
//               type="checkbox"
//               name="duration"
//               value="6months"
//               checked={selectedDuration === "6months"}
//               onChange={() => handleDurationChange("6months")}
//               disabled={
//                 storedDuration === "6months" || storedDuration === "1Year"
//               }
//             />
//             6 Months Gaana Plus Gaana Plus &#8377;249
//           </label>
//         </div>
//         {/* Checkbox for 1 Year */}
//         <div style={checkboxBoxStyle}>
//           <label style={checkboxLabelStyle}>
//             <input
//               type="checkbox"
//               name="duration"
//               value="1Year"
//               checked={selectedDuration === "1Year"}
//               onChange={() => handleDurationChange("1Year")}
//               disabled={storedDuration === "1Year"}
//             />
//             1 Year Gaana Plus Gaana Plus &#8377;399
//           </label>
//         </div>
//       </div>
//       <div style={{ textAlign: "center" }}></div>
//       {/* <Link to="/payment"> */}
//       <button
//         style={{
//           backgroundColor: "#E72C30",
//           borderRadius: "20px",
//           padding: "40x 40px",
//           margin: "40px 6px 6px",
//           width: "120px",
//           height: "30px",
//           cursor: "pointer",
//         }}
//         onClick={handleSubsc}
//         // className={theme.palette.mode === "dark" ? "gplusdark" : "gplus mr60"}
//       >
//         SUBSCRIBE NOW
//       </button>
//       {/* </Link> */}
//       {/* <Outlet /> */}
//     </div>
//   );
// };

// export default Subscription;

import React, { useState } from "react";
import subscriptionImage from "./assets/subscription.png";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, Box } from "@mui/material";

const Subscription = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const handleSubsc = () => {
    navigate("/payment", { state: selectedDuration });
  };

  const storedDuration = localStorage.getItem(`${isLoggedIn.data.email}`);

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
