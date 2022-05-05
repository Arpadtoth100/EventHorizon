import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainScreen from './views/MainScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<MainScreen />} />
          <Route path='/main' element={<MainScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
