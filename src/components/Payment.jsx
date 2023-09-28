// import { useContext, useState } from "react";
// import React from "react";
// import { useNavigate } from "react-router";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import subscriptionImage from "./assets/subscription.png";

// const containerStyle = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   marginTop: "2px",
// };

// const imageStyle = {
//   height: "25vh",
//   width: "105%",
//   padding: "0px",
// };

// const PaymentPage = () => {
//   //getting values of seat and price through use context
//   // const { price, seatCounter, setPrice, setCounter } = useContext(userContext);
//   const [Paymethod, setMethod] = useState("");

//   //states for chceking the condition of card method
//   const [cardNumber, setCardNumber] = useState("");
//   const [holderName, setHolderName] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [Cvv, setCvv] = useState("");
//   const [num, setNum] = useState("");
//   const [code, setCode] = useState("");

//   function checkWallet() {
//     if (code && num) {
//       toast.success("Payment Successful you will be redirected to home page");
//       setTimeout(() => {
//         navigate("/");
//       }, 3000);
//     }
//   }

//   //whenever the mode of payment change it will redender
//   // const[method,setMethod] = useState('');
//   const navigate = useNavigate();

//   function checkCardDetails() {
//     if (cardNumber && holderName && expiry && Cvv) {
//       toast.success("Payment Successful you will be redirected to home page");
//       setTimeout(() => {
//         navigate("/");
//       }, 2000);
//     }
//   }

//   return (
//     <div style={containerStyle}>
//       <img src={subscriptionImage} alt="Image Alt Text" style={imageStyle} />
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           padding: "1rem",
//           textAlign: "center",
//           margin: "2rem",
//         }}
//       >
//         <div
//           style={{
//             margin: "2rem",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-evenly",
//             padding: "0.3rem 3rem 0rem 3rem",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <h5>
//               <strong>Select Payment Method</strong>
//             </h5>
//           </div>
//           <div>
//             <input
//               type="radio"
//               id="card"
//               name="payment_method"
//               value="card"
//               onChange={() => setMethod("card")}
//             />
//              {" "}
//             <label htmlFor="card">
//               <strong>Card</strong>
//             </label>
//           </div>
//            {" "}
//           <div>
//             <input
//               type="radio"
//               id="wallet"
//               name="payment_method"
//               value="wallet"
//               onChange={() => setMethod("wallet")}
//             />
//              {" "}
//             <label htmlFor="wallet">
//               <strong>Wallet</strong>
//             </label>
//           </div>
//            {" "}
//           <div>
//             <input
//               type="radio"
//               id="netbanking"
//               name="payment_method"
//               value="netbanking"
//               disabled
//             />
//              {" "}
//             <label htmlFor="netbanking">
//               <strong>Net Banking(Disabled)</strong>
//             </label>
//           </div>
//         </div>
//         {/* =================================================================================== */}
//         {Paymethod === "card" ? (
//           <div style={{ margin: "2rem", padding: "1rem" }}>
//             <div class="form-group my-3">
//               <label for="exampleInputEmail1">
//                 <strong>Card Number</strong>
//               </label>
//               <input
//                 type="tel"
//                 class="form-control"
//                 placeholder="Enter Card Number"
//                 minLength={16}
//                 maxLength={16}
//                 onChange={(e) => {
//                   setCardNumber(e.target.value);
//                 }}
//               />
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 width: "100%",
//                 justifyContent: "space-evenly",
//               }}
//             >
//               <div
//                 class="form-group"
//                 style={{ width: "100%", padding: "0rem 0.5rem 0rem 0rem" }}
//               >
//                 <label for="name">
//                   <strong>Card Holder's Name</strong>
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Enter Card holder name"
//                   onChange={(e) => {
//                     setHolderName(e.target.value);
//                   }}
//                 />
//               </div>
//               <div
//                 class="form-group"
//                 style={{ width: "100%", padding: "0rem 0rem 0rem 0.5rem" }}
//               >
//                 <label for="expirydate">
//                   <strong>Expiry</strong>
//                 </label>
//                 <input
//                   type="month"
//                   class="form-control"
//                   placeholder="expiry date"
//                   onChange={(e) => {
//                     setExpiry(e.target.value);
//                   }}
//                 />
//               </div>
//             </div>
//             <div class="form-group my-3">
//               <label for="exampleInputEmail1">
//                 <strong>CVV</strong>
//               </label>
//               <input
//                 type="tel"
//                 class="form-control"
//                 placeholder="Enter CVV"
//                 minLength={3}
//                 maxLength={3}
//                 onChange={(e) => {
//                   setCvv(e.target.value);
//                 }}
//               />
//             </div>
//             <button
//               className="btn btn-success"
//               style={{ width: "100%", background: "red" }}
//               onClick={checkCardDetails}
//             >
//               Pay
//             </button>
//           </div>
//         ) : (
//           ""
//         )}
//         {Paymethod === "wallet" ? (
//           <div style={{ margin: "2rem", padding: "1rem" }}>
//             <div class="form-group my-3">
//               <label for="exampleInputEmail1">
//                 <strong>Phone Number</strong>
//               </label>
//               <input
//                 type="number"
//                 class="form-control"
//                 placeholder="Enter Phone Number"
//                 minLength={10}
//                 maxLength={10}
//                 onChange={(e) => {
//                   setNum(e.target.value);
//                 }}
//               />
//             </div>
//             <div class="form-group my-3">
//               <label for="exampleInputEmail1">
//                 <strong>One Time Password</strong>
//               </label>
//               <input
//                 type="number"
//                 class="form-control"
//                 placeholder="Enter 4 digit passcode"
//                 min={1000}
//                 maxLength={9999}
//                 onChange={(e) => {
//                   setCode(e.target.value);
//                 }}
//               />
//             </div>
//             <br />
//             <button
//               className="btn btn-success"
//               style={{
//                 width: "50%",
//                 height: "20px",
//                 backgroundColor: "#E72C30",
//                 cursor: "pointer",
//               }}
//               onClick={checkWallet}
//             >
//               Pay
//             </button>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import subscriptionImage from "./assets/subscription.png";
import { useNavigate } from "react-router";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2px",
};

const imageStyle = {
  height: "25vh",
  width: "104%",
  padding: "0px",
};

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const checkCardDetails = () => {
    // Your card payment logic here
    if (cardNumber && holderName && expiry && cvv) {
      toast.success("Payment Successful you will be redirected to home page");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  const checkWallet = () => {
    // Your wallet payment logic here
    if (otp && phoneNumber) {
      toast.success("Payment Successful you will be redirected to home page");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div style={containerStyle}>
      <img src={subscriptionImage} alt="Image Alt Text" style={imageStyle} />
      <br />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <FormControl component="fieldset">
                <h5>
                  <strong>Select Payment Method</strong>
                </h5>
                <RadioGroup
                  row
                  aria-label="payment-method"
                  name="payment_method"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label="Card"
                  />
                  <FormControlLabel
                    value="wallet"
                    control={<Radio />}
                    label="Wallet"
                  />
                  <FormControlLabel
                    value="netbanking"
                    control={<Radio disabled />}
                    label="Net Banking (Disabled)"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              {paymentMethod === "card" && (
                <form>
                  <TextField
                    label="Card Number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    inputProps={{ minLength: 16, maxLength: 16 }}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Card Holder's Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setHolderName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Expiry"
                        variant="outlined"
                        type="month"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setExpiry(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    label="CVV"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    inputProps={{ minLength: 3, maxLength: 3 }}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={checkCardDetails}
                    style={{ marginTop: "20px" }}
                  >
                    Pay
                  </Button>
                </form>
              )}
              {paymentMethod === "wallet" && (
                <form>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    inputProps={{ minLength: 10, maxLength: 10 }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <TextField
                    label="One Time Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    inputProps={{ min: 1000, max: 9999 }}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={checkWallet}
                    style={{ marginTop: "20px" }}
                  >
                    Pay
                  </Button>
                </form>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PaymentForm;
