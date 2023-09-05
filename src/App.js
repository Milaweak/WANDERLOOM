import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import FavorisPage from "./screens/FavorisPage";



import RegistrationForm from './screens/register';
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<RegistrationForm /> } />
        {/*autres routes ici */}
        <Route path="/favoris" element={<FavorisPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
