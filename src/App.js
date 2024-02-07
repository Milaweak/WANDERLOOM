import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import RegistrationForm from "./screens/register/register";
import Favorites from "./screens/FavorisPage";
import Login from "./screens/Login";
import MapPage from "./screens/MapPage";
import ItineraryForm from "./screens/ItineraryForm";
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<RegistrationForm />} />
        <Route path="/favoris" element={<Favorites />} />
        <Route path="/MapPage" element={<MapPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ItinaryForm" element={<ItineraryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
