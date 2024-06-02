import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

// Pages
import HomePage from './pages/HomePage';
import HireMe from './pages/HireMe';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HireMe" element={<HireMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
