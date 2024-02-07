import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { login } from "../api/DataFetcher";
import Cookies from "js-cookie";
import { Checkbox, FormControlLabel } from "@mui/material";
import GradientButton from "../components/GradiantBouton";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    const credentials = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const userData = await login(credentials);
      console.log(userData, "userData");
      if (userData.token) {
        Cookies.set("token", userData.token, { expires: 7 });
        dispatch(setCredentials({ user: userData.user, token: userData.token }));
        navigate("/ItinaryForm");
      } else {
        console.error("Aucun token reçu");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  // Le reste du code pour le rendu du composant

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
          <Box
            sx={{
              mt: 2,
              mb: 2,
              display: "flex",
              justifyContent: "center",
              borderRadius: "999px",
              background: "linear-gradient(to bottom, #4CAF50, #FFD700)",
              color: "black",
              padding: "11px 24px ",
            }}
          >
            <button type="submit">send</button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
