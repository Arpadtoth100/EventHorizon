import { auth } from '../config/firebase';
import { readEvent, readAttendee } from '../services/crud';
import { useState, useEffect } from 'react';
import EventCard from './EventComponents/EventCard';

function JoinedEvents() {
  const [attendee, setAttendee] = useState([]);
  const [events, setEvents] = useState([]);
  const currentUser = auth.currentUser.uid;

  useEffect(() => {
    readAttendee().then((snapshot) =>
      setAttendee(Object.entries(snapshot.val()))
    );
  }, []);

  useEffect(() => {
    readEvent().then((snapshot) => setEvents(Object.entries(snapshot.val())));
  }, []);

  const attendeeList = attendee.map((item) => {
    const eventId = item[0];
    return item[1].hasOwnProperty(currentUser) && eventId;
  });
  const filteredAttendeeList = attendeeList.filter(Boolean);

  const eventsIHaveJoined = events.map((item) => {
    const eventId = item[0];
    return (
      filteredAttendeeList.includes(item[0]) && (
        <EventCard key={eventId} {...item[1]} />
      )
    );
  });

  return (
    <>
      <div>
        <section className="cards-list">{eventsIHaveJoined}</section>
      </div>
    </>
  );
}

export default JoinedEvents;
