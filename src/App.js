import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import RegistrationForm from './screens/register';
import Favorites from "./screens/FavorisPage";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<RegistrationForm /> } />
        <Route path="/favoris" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
