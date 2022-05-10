import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainScreen from './views/MainScreen';
import PublicLayout from './layouts/PublicLayout';
import AboutUs from './components/Header/AboutUs';
import SearchScreen from './views/SearchScreen';
import Eventpage from './components/EventComponents/Eventpage';
import Privacy from './components/Footer/Privacy';
import SignOut from './components/SignOut';
import UserMainLayout from './layouts/UserMainLayout';
import ThankYouScreen from './views/ThankYouScreen';
import SignInUpScreen from './views/SignInUpScreen';
import ProfileScreen from './components/ProfileScreen';
import Contact from './components/Footer/Contact';
import FAQ from './components/Footer/FAQ';
import Preferences from './components/Preferences';
import CreateEventScreen from './views/CreateEventScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<MainScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/events" element={<div className="outlet_main">Events List coming here</div>} />
          <Route path="/eventpage" element={<Eventpage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/signin" element={<SignInUpScreen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/create_event" element={<CreateEventScreen />} />
          <Route path="*" element={<div className="outlet_main">No content found</div>} />
        </Route>
        <Route element={<UserMainLayout />}>
          <Route path="/thankyou" element={<ThankYouScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/events" element={<div className="outlet_main">Events List coming here</div>} />
          <Route path="/eventpage" element={<Eventpage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/create_event" element={<CreateEventScreen />} />
          <Route path="*" element={<div className="outlet_main">No content found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
