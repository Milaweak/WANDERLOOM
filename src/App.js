
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/home';
import RegistrationForm from './screens/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<RegistrationForm /> } />
        {/*autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
