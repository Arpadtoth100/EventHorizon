import EventInfo from './EventInfo';
import { useState, useEffect } from 'react';
import { readEvent, readAttendee, readUser } from '../../services/crud';
import { useParams } from 'react-router-dom';

function EventPage() {
  const [event, setEvent] = useState([]);
  const [attendee, setAttendee] = useState([]);
  const [users, setUsers] = useState([]);

  const params = useParams();

  useEffect(() => {
    readEvent(params.id).then((snapshot) => setEvent(snapshot.val()));
  }, []);

  useEffect(() => {
    readAttendee(params.id).then((snapshot) => setAttendee(Object.entries((snapshot.val() || {}))));
  }, []);

  useEffect(() => {
    readUser().then((snapshot) => setUsers(Object.entries((snapshot.val() || {}))));
  }, [])

  const attendeeList = attendee.map((item) => {
    const atndId = item[0];
    return atndId
  })
  const userList = users.map((user) => {
    if (attendeeList.includes(user[0])) {
      return user
    }
  })
  const finalList = userList.filter(Boolean)
  const profileImages = finalList.map((item) => {
    const key = item[0]
    return <div key={key} className='img_wrap_joinedeventsuserimage'>
      <img className="useravatar_joinedeventsuserimage" src={item[1].profile_url ? item[1].profile_url : 'https://i.pravatar.cc/300' }></img>
      <div className='img_description_joinedeventsuserimage'>{item[1].username}</div>
    </div>
  })
  return (
    <div className="outlet_main">
      <EventInfo eventData={event} eventId={params.id} />
      <div className='joinedeventsuserimage_container'>
        <div className='attendeebox'>
          <div className='attendeetitle'>
          <h2>Attendees</h2>
          </div>
          <div className='attendees'>
          {profileImages}
          </div>
         
        </div>
        
        
      </div>
    </div>
  );
}

export default EventPage;
