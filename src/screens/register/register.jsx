import React, { useState } from "react";
import { Container, Paper, TextField, Typography } from "@mui/material";
import GradientButton from "../../components/GradiantBouton";
import { register } from "../../api/DataFetcher";
import registercss from "./register.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // Pour afficher les messages d'erreur

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    try {
      await register(userData, (response) => {
        console.log("Inscription réussie:", response);
      });
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      setErrorMessage("Erreur lors de l'inscription. Veuillez réessayer.");
    }
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
          <GradientButton type="submit" label="S'inscrire" onClick={handleSubmit} />
        </form>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
