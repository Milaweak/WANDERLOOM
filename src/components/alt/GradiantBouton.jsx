import React from "react";
import { Button } from "@mui/material";

const GradientButton = ({ label, event }) => {
  const buttonStyle = {
    borderRadius: "999px",
    background: "linear-gradient(to bottom, #4CAF50, #FFD700)",
    color: "black",
    padding: "12px 24px",
    "@media (max-width: 600px)": {
      padding: "10px 20px",
      fontSize: "0.8rem",
      width: "100%",
    },
  };

  return (
      <Button onClick={event} sx={buttonStyle}>
        {label}
      </Button>
  );
};

export default GradientButton;
