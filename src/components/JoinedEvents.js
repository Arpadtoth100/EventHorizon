import { readEvent, readAttendee } from '../services/crud';
import { useState, useEffect, useContext } from 'react';
import Pagination from '../services/Pagination';
import { AuthContext } from '../components/Context/AuthContext';

function JoinedEvents() {
  const [attendee, setAttendee] = useState([]);
  const [events, setEvents] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loggedUserID &&
      readAttendee().then((snapshot) =>
        setAttendee(Object.entries(snapshot.val()))
      );
  }, [authContext.loggedUserID]);

  useEffect(() => {
    authContext.loggedUserID &&
      readEvent().then((snapshot) => setEvents(Object.entries(snapshot.val())));
  }, [authContext.loggedUserID]);

  const attendeeList = attendee.map((item) => {
    const eventId = item[0];
    return item[1].hasOwnProperty(authContext.loggedUserID) && eventId;
  });

  const eventsIHaveJoined = events.map((item) => {
    const eventId = item[0];
    if (attendeeList.includes(item[0])) {
      return item;
    }
  });
  const finalEvents = eventsIHaveJoined.filter(Boolean);

  return (
    <>
      <div>
        {finalEvents.length !== 0 ? (
          <Pagination title={'Events I have Joined'} data={finalEvents} />
        ) : (
          <h3>You have not joined any events yet!</h3>
        )}
      </div>
    </>
  );
}

export default JoinedEvents;
