import InfoBox from '../components/utilities/InfoBox';

function ThankYouScreen() {
  return (
    <div className="outlet_main">
      <h1>Welcome to Event Horizon!</h1>
      <h2>What do you want to do next?</h2>
      <div className="infoboxcontainer">
        <div className="infoboxcolumn">
          <InfoBox navTo={'/create'} title={'Create Event'} />
        </div>
        <div className="infoboxcolumn">
          <InfoBox navTo={'/search'} title={'Browse Events'} />
        </div>
        <div className="infoboxcolumn">
          <InfoBox navTo={'/profile'} title={'Go to profile'} />
        </div>
      </div>
    </div>
  );
}
export default ThankYouScreen;
