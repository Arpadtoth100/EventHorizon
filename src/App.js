import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainScreen from './views/MainScreen';

function App() {
  return (
    <div className="App">
      <h1>EventHorizon</h1>
      <Routes>
      <Route path='/' element={<MainScreen />} />
          <Route path='/main' element={<MainScreen />} />
      </Routes>
    </div>
  );
}

export default App;
