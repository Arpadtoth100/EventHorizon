import Image from '../utilities/Image';
import EventDetail from './EventDetail';
import EventInfo from './EventInfo';

function EventPage() {
  return (
    <div>
      <Image />
      <EventDetail />
      <EventInfo
        title={'Random Cat Event'}
        date={'2022.05.04'}
        venue={'Carnegie Hall'}
      />
    </div>
  );
}

export default EventPage;
