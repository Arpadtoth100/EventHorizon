import { readEvent, readAttendee } from '../services/crud';
import { useState, useEffect, useContext } from 'react';
import Pagination from '../services/Pagination';
import { AuthContext } from '../components/Context/AuthContext';
import { filterEvent } from '../services/crud';

function JoinedEvents() {
  const [attendee, setAttendee] = useState([]);
  const [events, setEvents] = useState([]);
  const authContext = useContext(AuthContext);
  const [eventList, setEventList] = useState([]);
  const perPage = 4;

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

  useEffect(() => {
    readEvent().then((snapshot) => {
      setEventList(Object.entries(snapshot.val()));
    });
  }, []);

  return (
    <>
      {finalEvents.length !== 0 ? (
        <Pagination
          title={'Events I have Joined'}
          data={finalEvents}
          perPage={perPage}
        />
      ) : (
        <>
          <h2 className="warning">You have not joined any events yet!</h2>
          <div className="nojoinedevents">
            <Pagination
              title={'Check Theese Events on The Horizon'}
              data={eventList}
              perPage={perPage}
            />
          </div>
          <br></br>
        </>
      )}
    </>
  );
}

export default JoinedEvents;
