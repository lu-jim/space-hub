import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
