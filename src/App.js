import './App.css';
import { useEffect, useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import { auth } from './config/firebase';
import { AuthContext } from './components/Context/AuthContext';

import MainScreen from './views/MainScreen';
import PublicLayout from './layouts/PublicLayout';
import AboutUs from './components/Header/AboutUs';
import SearchScreen from './views/SearchScreen';
import Eventpage from './components/EventComponents/Eventpage';
import Privacy from './components/Footer/Privacy';
import UserMainLayout from './layouts/UserMainLayout';
import ThankYouScreen from './views/ThankYouScreen';
import EventCreatedScreen from './views/EventCreatedScreen';
import SignInUpScreen from './views/SignInUpScreen';
import ProfileScreen from './components/ProfileScreen';
import Contact from './components/Footer/Contact';
import FAQ from './components/Footer/FAQ';
import UpdateUserScreen from './views/UpdateUserScreen';
import CreateEventScreen from './views/CreateEventScreen';
import NoContent from './components/NoContent';

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
    });
  }, [loggedUserID]);

  return (
    <PayPalScriptProvider
      option={{
        'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
        currency: 'USD',
      }}
    >
      <div className="App">
        <AuthContext.Provider value={{ loggedUserID, setLoggedUserID }}>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<MainScreen />} />
              <Route path="/main" element={<MainScreen />} />
              <Route path="/eventpage/:id" element={<Eventpage />} />
              <Route path="/about" element={<AboutUs />} />
              {!loggedUserID && (
                <Route path="/search" element={<SearchScreen />} />
              )}
              <Route path="/signin" element={<SignInUpScreen />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/eventpage" element={<Eventpage />} />
              <Route path="*" element={<NoContent />} />
            </Route>

            <Route element={<UserMainLayout />}>
              <Route
                path="/search"
                element={
                  <AuthProtected>
                    <SearchScreen />
                  </AuthProtected>
                }
              />
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
                path="/event_created"
                element={
                  <AuthProtected>
                    <EventCreatedScreen />
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
            </Route>
          </Routes>
        </AuthContext.Provider>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
