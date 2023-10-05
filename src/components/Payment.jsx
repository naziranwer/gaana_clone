import React, { useState, useEffect } from "react";
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
  CircularProgress,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import subscriptionImage from "./assets/subscription.png";
import { useNavigate, useLocation } from "react-router";

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

const LoadingOverlay = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255, 255, 255, 0.8)", // Optional: Add a semi-transparent background
    }}
  >
    <CircularProgress size={50} color="secondary" />
  </div>
);

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));

  const selectedDuration = location.state;

  console.log("Selected Duration: ", selectedDuration);

  const checkCardDetails = () => {
    useEffect(() => {
      if (!isLoggedIn) {
        navigate("/");
      }
    }, [isLoggedIn, navigate]);
    // Your card payment logic here
    if (cardNumber && holderName && expiry && cvv) {
      // toast.success("Payment Successful you will be redirected to home page");
      setLoading(true);
      setTimeout(() => {
        toast.success("Payment Successful you will be redirected to home page");
        setLoading(false);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      }, 10000);
      localStorage.setItem(`${isLoggedIn?.data?.email}`, selectedDuration);
    }
  };

  const checkWallet = () => {
    // Your wallet payment logic here
    if (otp && phoneNumber) {
      setLoading(true);

      setTimeout(() => {
        toast.success("Payment Successful you will be redirected to home page");
        setLoading(false);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      }, 10000);
      localStorage.setItem(`${isLoggedIn?.data?.email}`, selectedDuration);
    }
  };

  return (
    <div style={containerStyle}>
      <img src={subscriptionImage} alt="Image Alt Text" style={imageStyle} />
      <br />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              style={{ padding: "20px", position: "relative" }}
            >
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
            <Paper
              elevation={3}
              style={{ padding: "20px", position: "relative" }}
            >
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
                  {loading && <LoadingOverlay />}
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={checkCardDetails}
                    style={{ marginTop: "20px" }}
                    disabled={loading}
                  >
                    {loading ? "Processing" : "Pay"}
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
                  {loading && <LoadingOverlay />}
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={checkWallet}
                    style={{ marginTop: "20px" }}
                    disabled={loading}
                  >
                    {loading ? "Processing" : "Pay"}
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
