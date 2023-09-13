import React, { useState } from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";

const RootContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const FormContainer = styled("div")({
  backgroundColor: "#333",
  padding: "20px 30px",
  borderRadius: "6px",
  color: "#fff",
  width: "100%",
  maxWidth: "400px",
});

const Title = styled(Typography)({
  fontSize: "22px",
  fontFamily: "proximanova-bold-webfont, Arial, sans-serif",
  marginBottom: "8px",
  display: "block",
  color: "hsla(0, 0%, 100%, 0.9)",
});

const SubTitle = styled(Typography)({
  fontSize: "12px",
  fontFamily: "proximanova-semibold-webfont, Arial, sans-serif",
  display: "block",
  padding: "0 10px",
  lineHeight: "1.6",
  color: "#8e8e93",
});

const Input = styled(TextField)({
  width: "100%",
  marginBottom: "20px",
});

const StyledButton = styled(Button)({
  padding: "12px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  borderRadius: "30px",
  transition: "all 0.2s",
  color: "#a8a8a8",
  backgroundColor: "#dedede",
  cursor: "pointer",
});

const Logo = styled("img")({
  width: "129px",
  height: "33px",
});

const ModalHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "15px",
});

const ModalButton = styled(Button)({
  color: "#fff",
});

function AnotherLogin() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <RootContainer>
      <FormContainer>
        <Logo src="https://your-logo-url.svg" alt="Logo" />
        <Title variant="h5">AnotherLogin/Signup</Title>
        <SubTitle variant="body2">
          Get a personalized experience, and access all your music
        </SubTitle>
        <form>
          <Input
            label="Enter Email or Mobile number"
            variant="outlined"
            fullWidth
            autoFocus
          />
          <Input
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <StyledButton variant="contained" color="primary" fullWidth disabled>
            Continue
          </StyledButton>
        </form>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleOpenModal}
        >
          Open Modal
        </Button>
      </FormContainer>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <ModalHeader>
          <Logo src="https://your-logo-url.svg" alt="Logo" />
          <ModalButton onClick={handleCloseModal}>Close</ModalButton>
        </ModalHeader>
        <div>
          {/* Add your modal content here */}
          <Typography variant="body1">Modal Content Goes Here</Typography>
        </div>
      </Dialog>
    </RootContainer>
  );
}

export default AnotherLogin;
