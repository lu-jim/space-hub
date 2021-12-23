import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Profile from './components/Profile';
import Rockets from './components/Rockets/Rockets';
import store from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
