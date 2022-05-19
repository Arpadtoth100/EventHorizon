import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainScreen from './views/MainScreen';
import PublicLayout from './layouts/PublicLayout';
import AboutUs from './components/Header/AboutUs';
import SearchScreen from './views/SearchScreen';
import Eventpage from './components/EventComponents/Eventpage';
import Privacy from './components/Footer/Privacy';
import UserMainLayout from './layouts/UserMainLayout';
import ThankYouScreen from './views/ThankYouScreen';
import SignInUpScreen from './views/SignInUpScreen';
import ProfileScreen from './components/ProfileScreen';
import Contact from './components/Footer/Contact';
import FAQ from './components/Footer/FAQ';
import UpdateUserScreen from './views/UpdateUserScreen';
import CreateEventScreen from './views/CreateEventScreen';
import JoinedEventsScreen from './views/JoinedEventsScreen';
import MyEventsScreen from './views/MyEventsScreen';

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, useContext } from 'react';
import { auth } from './config/firebase';

import { AuthContext } from './components/Context/AuthContext';

function App() {
  const [loggedUserID, setLoggedUserID] = useState();

  const AuthProtected = (props) => {
    const authContext = useContext(AuthContext);
    if (authContext.loggedUserID === null) {
      return <SignInUpScreen />;
    } else {
      return <>{props.children}</>;
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUserID(user.uid);
      } else {
        setLoggedUserID(null);
      }
      console.log(loggedUserID);
    });
  }, [loggedUserID]);

  return (
    <div className="App">
      <AuthContext.Provider value={{ loggedUserID, setLoggedUserID }}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<MainScreen />} />
            <Route path="/main" element={<MainScreen />} />
            <Route path="/eventpage/:id" element={<Eventpage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/signin" element={<SignInUpScreen />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/eventpage" element={<Eventpage />} />
            <Route
              path="*"
              element={<div className="outlet_main">No content found</div>}
            />
          </Route>

          <Route element={<UserMainLayout />}>
            <Route
              path="/thankyou"
              element={
                <AuthProtected>
                  <ThankYouScreen />
                </AuthProtected>
              }
            />
            <Route
              path="/create_event"
              element={
                <AuthProtected>
                  <CreateEventScreen />
                </AuthProtected>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthProtected>
                  <ProfileScreen />
                </AuthProtected>
              }
            />
            <Route
              path="/update_user"
              element={
                <AuthProtected>
                  <UpdateUserScreen />
                </AuthProtected>
              }
            />
            <Route
              path="/joined_events"
              element={
                <AuthProtected>
                  <JoinedEventsScreen />
                </AuthProtected>
              }
            />
            <Route
              path="/my_events"
              element={
                <AuthProtected>
                  <MyEventsScreen />
                </AuthProtected>
              }
            />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
