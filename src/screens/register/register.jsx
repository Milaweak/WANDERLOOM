import React, { useState } from "react";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import GradientButton from "../../components/GradiantBouton";
import registercss from "./register.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //logique de traitement de l'inscription
    console.log(formData);
    console.log("connecté!");
  };

  return (
    <Container maxWidth="xs">
      <Paper
        sx={{
          marginTop: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <Typography variant="h5">Inscription</Typography>
        <form onSubmit={handleSubmit} sx={{ width: "100%", marginTop: "1rem" }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nom d'utilisateur"
            name="username"
            autoComplete="username"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse e-mail"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirmer le mot de passe"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <GradientButton
            type="submit"
            label="S'inscrire"
            onClick={handleSubmit}
          />
        </form>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
