import React from 'react';
import { Button } from '@mui/material';

const GradientButton = ({ label, onClick }) => {
  const buttonStyle = {
    borderRadius: '999px', 
    background: 'linear-gradient(to bottom, #4CAF50, #FFD700)', 
    color: 'white', 
    padding: '12px 24px'
  };

  return (
    <Button onClick={onClick} style={buttonStyle}>
      {label}
    </Button>
  );
};

export default GradientButton;
