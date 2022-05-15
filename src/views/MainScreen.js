import CardContainer from '../components/utilities/CardContainer';
import { eventCardData } from '../services/eventCardData';
import Slider from '../services/Slider';
import { readEvent } from '../services/crud';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const imgSet = [
  'https://www.w3schools.com/howto/img_nature_wide.jpg',
  'https://www.w3schools.com/howto/img_snow_wide.jpg',
  'https://www.w3schools.com/howto/img_lights_wide.jpg',
  'https://www.w3schools.com/howto/img_mountains_wide.jpg',
];



const MainScreen = () => {

 /* const navigateTo = useNavigate()
  function handleNavigate() {
    navigateTo('/Eventpage')
  }*/
  const navigate = useNavigate();


  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    readEvent().then(snapshot => setEventList(Object.entries(snapshot.val())));
  }, [])


  return (
    <div className="outlet_main">
      <Slider imgSet={imgSet} />
      <CardContainer onClick={()=>navigate("/eventpage")}
        title={'Newest Events on the Horizon'}
        data={eventList}
      />
      <CardContainer title={'Featured Events'} data={eventList} />
    </div>
  );
};

export default MainScreen;
