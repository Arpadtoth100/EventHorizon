import CardContainer from '../components/utilities/CardContainer';

const MainScreen = () => {
  return (
    <div className='outlet_main'>
      <div>Caroussel here</div>
      <CardContainer title={'Newest Events on the Horizon'} />
      <CardContainer title={'Featured Events'} />
    </div>
  );
};

export default MainScreen;
