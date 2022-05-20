import Image from '../utilities/Image';
import EventDetail from './EventDetail';
import EventInfo from './EventInfo';
import { useState, useEffect } from 'react';
import { readEvent } from '../../services/crud';
import { useParams } from 'react-router-dom';

function EventPage() {
  const [event, setEvent] = useState([]);

  const params = useParams();

  useEffect(() => {
    readEvent(params.id).then((snapshot) => setEvent(snapshot.val()));
  }, [params.id]);

  return (
    <div className="outlet_main">
      <EventInfo eventData={event} eventId={params.id} />
    </div>
  );
}

export default EventPage;
