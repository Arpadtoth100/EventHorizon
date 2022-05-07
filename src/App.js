import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainScreen from './views/MainScreen';
import PublicLayout from './layouts/PublicLayout';
import AboutUs from './components/Header/AboutUs';
import SearchForEvents from './components/SearchForEvents';
import Eventspage from './components/Eventpage';
import Privacy from './components/Footer/Privacy';
import SignOut from './components/SignOut';
import UserMainLayout from './layouts/UserMainLayout';
import ThankYouScreen from './views/ThankYouScreen';
import SignInUpScreen from './views/SignInUpScreen';
import Profile from './components/Profile';
import Contact from './components/Footer/Contact';
import FAQ from './components/Footer/FAQ';

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
          <Route path="/signin" element={<SignInUpScreen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<div>No content found</div>} />
        </Route>
        <Route element={<UserMainLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/search" element={<SearchForEvents />} />
          <Route path="/events" element={<Eventspage />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<div>No content found</div>} />
          <Route path="/thankyou" element={<ThankYouScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
