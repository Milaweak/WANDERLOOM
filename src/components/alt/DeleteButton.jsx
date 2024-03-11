import React from "react";
import { Button } from "@mui/material";

const DeleteButton = ({ label, onClick }) => {
    const buttonStyle = {
        borderRadius: "999px",
        background: "linear-gradient(to bottom, #FF6347, #FF4500)", // Rouge
        color: "white",
        padding: "12px 24px",
        border: "none",
        cursor: "pointer",
        outline: "none",
    };

    return (
        <Button onClick={onClick} style={buttonStyle}>
            {label}
        </Button>
    );
};

export default DeleteButton;
