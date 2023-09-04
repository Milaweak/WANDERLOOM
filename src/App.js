
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
