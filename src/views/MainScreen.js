import CardContainer from '../components/utilities/CardContainer';
import { eventCardData } from '../services/eventCardData';

const MainScreen = () => {
  return (
    <div className="outlet_main">
      <div>Caroussel here</div>
      <CardContainer
        title={'Newest Events on the Horizon'}
        data={eventCardData}
      />
      <CardContainer title={'Featured Events'} data={eventCardData} />
    </div>
  );
};

export default MainScreen;
