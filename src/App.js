import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import RegistrationForm from "./screens/register/register";
import Favorites from "./screens/FavorisPage";
import Login from "./screens/Login";
import MapPage from "./screens/MapPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<RegistrationForm />} />
        <Route path="/favoris" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/MapPage" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
