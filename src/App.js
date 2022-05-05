import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainScreen from './views/MainScreen';
import PublicLayout from './layouts/PublicLayout';
import AboutUs from './components/AboutUs';
import SearchForEvents from './components/SearchForEvents';
import Eventspage from './components/Eventpage';
import Privacy from './components/Privacy';
import SignOut from './components/SignOut';
import UserMainLayout from './layouts/UserMainLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<MainScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/search" element={<SearchForEvents />} />
          <Route path="/events" element={<Eventspage />} />
          <Route path="/signin" element={<div>sign in screen here</div>} />
          <Route path="/contact" element={<div>Contact comes here</div>} />
          <Route path="/faq" element={<div>FAQ comes here</div>} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<div>No content found</div>} />
        </Route>
        <Route element={<UserMainLayout />}>
          <Route path="/" element={<MainScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/search" element={<SearchForEvents />} />
          <Route path="/events" element={<Eventspage />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/contact" element={<div>Contact comes here</div>} />
          <Route path="/faq" element={<div>FAQ comes here</div>} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<div>No content found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
