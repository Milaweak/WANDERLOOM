import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import Cookies from "js-cookie";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    Cookies.remove("token");

    dispatch(logout());
  };

  return <button onClick={handleLogout}>Déconnexion</button>;
};

export default LogoutButton;
