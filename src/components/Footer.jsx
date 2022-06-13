import { Typography, Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        backgroundColor: "#205375",
        width: "90%",
        height: "60px",
        mx: "auto",
        marginTop: "100px",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
      }}
    >
      <Typography variant="body1" color="white" align="center">
        ©️ Bookmarker The Demo Page. All Right Reseverd 2010-30
      </Typography>
      <Typography variant="body1" color="white" align="center">
        Contact Us : +91 9329219213, 9831716812
      </Typography>
    </Container>
  );
};

export default Footer;
