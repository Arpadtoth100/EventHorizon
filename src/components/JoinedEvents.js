import { readEvent, readAttendee } from '../services/crud';
import { useState, useEffect, useContext } from 'react';
import Pagination from '../services/Pagination';
import { AuthContext } from '../components/Context/AuthContext';

function JoinedEvents() {
  const [attendee, setAttendee] = useState([]);
  const [events, setEvents] = useState([]);
  const authContext = useContext(AuthContext);
  

  useEffect(() => {
    authContext.loggedUserID && readAttendee().then((snapshot) =>
      setAttendee(Object.entries(snapshot.val()))
    );
  }, []);

  useEffect(() => {
    authContext.loggedUserID && readEvent().then((snapshot) => setEvents(Object.entries(snapshot.val())));
  }, []);

  const attendeeList = attendee.map((item) => {
    const eventId = item[0];
    return item[1].hasOwnProperty(authContext.loggedUserID) && eventId;
  });

  const eventsIHaveJoined = events.map((item) => {
    const eventId = item[0];
    if (attendeeList.includes(item[0])) {
      return item
    }
  });
  const finalEvents = eventsIHaveJoined.filter(Boolean)
  return (
    <>
      <div>
        <Pagination
          title={'Events I have joined'}
          data={finalEvents}
        />
      </div>
    </>
  );
}

export default JoinedEvents;
