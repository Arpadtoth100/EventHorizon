import Image from '../utilities/Image';
import EventDetail from './EventDetail';
import EventInfo from './EventInfo';
import { useState, useEffect } from 'react';
import { readEvent } from '../../services/crud';
import { useParams } from 'react-router-dom';


function EventPage() {

  const [event, setEvent] = useState([]);
 
  const params = useParams()
  console.log(params.id)


  useEffect(() => {
    readEvent(params.id).then(snapshot => setEvent(snapshot.val()));
  }, [])

  console.log(event)
  return (

    <div className='outlet_main'>
      <EventInfo data={event}/>
    </div>
    
  );
}

export default EventPage;
