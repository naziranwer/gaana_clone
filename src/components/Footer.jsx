import React from "react";
import { styled } from "@mui/system";
import { Container, Box, Link } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterContainer = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#f5f5f5",
  padding: "16px", // Adjust as needed
  marginTop: "auto",
}));

const InnerContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  flexWrap: "wrap",
  margin: "8px", // Adjust as needed
});

const RowContainer = styled("div")({
  margin: "4px", // Adjust as needed
});

const CopyrightText = styled("p")({
  textAlign: "center",
  padding: "8px", // Adjust as needed
  color: "#888",
});

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none", // Remove underlines
  color: theme.palette.mode === "dark" ? "#fff" : "#888",
  "&:hover": {
    textDecoration: "underline", // Add underlines on hover
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <InnerContainer>
          <RowContainer style={{ textAlign: "center" }}>
            <h1>Bas Bajna Chahiye Gaana</h1>
            <p style={{ color: "#888" }}>
              Gaana is the one-stop solution for all your music needs. Gaana
              offers you free, unlimited access to over 30 million Hindi Songs,
              Bollywood Music, English MP3 songs, Regional Music & Mirchi Play.
            </p>
          </RowContainer>
          <div
            style={{
              width: "80%",
              border: "1px solid #888",
              marginBottom: "16px",
            }}
          ></div>
          <RowContainer
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.facebook.com/gaana.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlinedIcon
                style={{
                  fontSize: 32,
                  color: "#1877f2",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#135296")}
                onMouseLeave={(e) => (e.target.style.color = "#1877f2")}
              />
            </a>
            <a
              href="https://www.twitter.com/gaana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon
                style={{
                  fontSize: 32,
                  color: "#1da1f2",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1665b9")}
                onMouseLeave={(e) => (e.target.style.color = "#1da1f2")}
              />
            </a>
          </RowContainer>
          <div
            style={{
              width: "80%",
              border: "1px solid #888",
              marginBottom: "16px",
            }}
          ></div>
          <RowContainer>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="16px"
            >
              <StyledLink href="https://ads.gaana.com/" target="_blank">
                Advertise on Gaana.com
              </StyledLink>
              <StyledLink href="#" target="_blank">
                Terms of Use
              </StyledLink>
              <StyledLink href="#" target="_blank">
                Privacy Policy
              </StyledLink>
              <StyledLink href="https://gaana.com/aboutgaana" target="_blank">
                Partners
              </StyledLink>
              <StyledLink
                href="https://gaana.com/sitemap/sitemap.html"
                target="_blank"
              >
                Sitemap
              </StyledLink>
              <StyledLink href="https://gaana.com/faq" target="_blank">
                FAQ
              </StyledLink>
            </Box>
          </RowContainer>
          <div
            style={{
              width: "80%",
              border: "1px solid #888",
              marginBottom: "16px",
            }}
          ></div>
        </InnerContainer>
        <CopyrightText>© 2023 Gaana. All Rights Reserved</CopyrightText>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
