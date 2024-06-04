import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Pages
import HomePage from './Pages/HomePage';
import HireMe from './Pages/HireMe';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HireMe" element={<HireMe />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
