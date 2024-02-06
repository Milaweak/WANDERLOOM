import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GradientButton from "../components/GradiantBouton";
import { login } from "../api/DataFetcher"; // Assurez-vous que le chemin d'importation est correct

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Création de l'objet credentials à partir des données du formulaire
    const credentials = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // Appel de la fonction login avec les credentials
    await login(credentials, (userData) => {
      console.log(userData);
      // Vous pouvez ici stocker userData où vous en avez besoin (contexte, localStorage pour le token, etc.)
    });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        backgroundColor: "#F2F0F0",
        borderRadius: "16px",
        height: "40vh",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse e-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Rester connecté" />
          <GradientButton type="submit" label="Se connecter" />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
