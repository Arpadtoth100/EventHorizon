import CardContainer from '../components/utilities/CardContainer';
import { eventCardData } from '../services/eventCardData';
import Slider from '../components/services/Slider';

const imgSet = [
  'https://www.w3schools.com/howto/img_nature_wide.jpg',
  'https://www.w3schools.com/howto/img_snow_wide.jpg',
  'https://www.w3schools.com/howto/img_lights_wide.jpg',
  'https://www.w3schools.com/howto/img_mountains_wide.jpg',
];

const MainScreen = () => {
  return (
    <div className="outlet_main">
      <Slider imgSet={imgSet} />
      <CardContainer
        title={'Newest Events on the Horizon'}
        data={eventCardData}
      />
      <CardContainer title={'Featured Events'} data={eventCardData} />
    </div>
  );
};

export default MainScreen;
