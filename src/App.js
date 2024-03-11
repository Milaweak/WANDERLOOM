import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./screens/register/register";
import Favorites from "./screens/FavorisPage";
import Login from "./screens/Login";
import Navbar from "./components/layout/Navbar";
import React, {useEffect} from "react";
import Home from "./screens/home";
import ActivityDetailPage from "./screens/ActivityDetailPage";
import {useDispatch} from "react-redux";
import {setToken} from "./features/userSlice";
import background from "./wallpaper.png";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setToken(token));
        }
    }, [dispatch]);

    return (
        <Router>
            <div style={{ backgroundImage: `url(${background})` , backgroundSize: 'cover', minHeight: '100vh'}} >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/inscription" element={<RegistrationForm />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/activity/:id" element={<ActivityDetailPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

