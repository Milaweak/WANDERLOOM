import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material';
import GradientButton from '../components/alt/GradiantBouton';
import { loginUser } from '../actions/userActions';
import { setToken } from "../features/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Email invalide');
            return;
        }
        if (!validatePassword(password)) {
            setPasswordError('Le mot de passe doit comporter au moins 5 caractères');
            return;
        }
            try {
                const response = await dispatch(loginUser(email, password));
                if (response) {
                    dispatch(setToken(response.token));
                    localStorage.setItem('token', response.token);
                    navigate('/home');
                }
            } catch (error) {
                console.error('Erreur lors de la connexion:', error);
            }
        };


    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 5;
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ backgroundColor: "#F2F0F0", borderRadius: "16px", height: "40vh", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} className="mt-10 mx-auto p-4 md:p-8">
            <Box sx={{ textAlign: 'center', mt: '2rem' }}>
                <Typography variant="h4" gutterBottom>
                    Connexion
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Adresse e-mail"
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!emailError}
                        helperText={emailError}
                    />
                    <TextField
                        fullWidth
                        label="Mot de passe"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!passwordError}
                        helperText={passwordError}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                        label="Rester connecté"
                    />
                    <Box>
                        <GradientButton label="Connexion" event={handleSubmit} />
                    </Box>
                </form>

            </Box>
        </Container>
    );
};

export default Login;
