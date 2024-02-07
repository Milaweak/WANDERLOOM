import React from "react";
import { Button } from "@mui/material";

const GradientButton = ({ label, event }) => {
  const buttonStyle = {
    borderRadius: "999px",
    background: "linear-gradient(to bottom, #4CAF50, #FFD700)",
    color: "black",
    padding: "12px 24px",
  };

  return (
    <Button onclick={event} style={buttonStyle} >
      {label}
    </Button>
  );

};

export default GradientButton;
