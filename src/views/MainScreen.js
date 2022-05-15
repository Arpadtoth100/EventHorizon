import CardContainer from '../components/utilities/CardContainer';
import { eventCardData } from '../services/eventCardData';
import Slider from '../services/Slider';
import { readEvent } from '../services/crud';
import { useState, useEffect } from 'react';

const imgSet = [
  './celebration-Image by Pete Linforth from Pixabay magenta crop1 resized.jpg',
  './moon Image by Gerd Altmann from Pixabay new color1 crop1 resized.jpg',
  './sunset-Image by Gerd Altmann from Pixabay new color1 crop1.jpg',
  './moon2 Image by Gerd Altmann from Pixabay new color1 crop1 resized.jpg',
  'https://www.w3schools.com/howto/img_nature_wide.jpg',
  'https://www.w3schools.com/howto/img_snow_wide.jpg',
  'https://www.w3schools.com/howto/img_lights_wide.jpg',
  'https://www.w3schools.com/howto/img_mountains_wide.jpg',
];

const MainScreen = (props) => {

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    readEvent().then(snapshot => setEventList(Object.entries(snapshot.val())));
  }, [])


  return (
    <div className="outlet_main">
      <Slider imgSet={imgSet} />
      <br />
      <CardContainer
        title={'Newest Events on the Horizon'}
        data={eventList}
      />
      <CardContainer title={'Featured Events'} data={eventList} />
    </div>
  );
};

export default MainScreen;
