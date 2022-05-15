import Image from '../utilities/Image';
import EventDetail from './EventDetail';
import EventInfo from './EventInfo';
import { useState, useEffect } from 'react';
import { readEvent } from '../../services/crud';


function EventPage() {

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    readEvent().then(snapshot => setEventList(Object.entries(snapshot.val())));
  }, [])
  return (
    <div className='outlet_main'>
      
      
      <EventInfo
      data={eventList}
       
      />
    </div>
  );
}

export default EventPage;
