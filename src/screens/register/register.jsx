import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, TextField, Typography } from '@mui/material';
import GradientButton from "../../components/alt/GradiantBouton";

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire
    console.log({ email, password, confirmPassword });
  };

  return (
      <Container component="main" maxWidth="xs" sx={{ backgroundColor: "#F2F0F0", borderRadius: "16px", height: "60vh", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        <Box sx={{ textAlign: 'center', mt: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Inscription
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                label="Adresse e-mail"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                fullWidth
                label="Mot de passe"
                variant="outlined"
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
                fullWidth
                label="Confirmer le mot de passe"
                variant="outlined"
                margin="normal"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <GradientButton label="S'INSCRIRE" event={handleSubmit} />
          </form>
          <Typography variant="body2" sx={{ marginTop: '1rem' }}>
            Vous avez déjà un compte ? <Link to="/login">Connectez-vous ici !</Link>
          </Typography>
        </Box>
      </Container>
  );
};

export default RegisterForm;

