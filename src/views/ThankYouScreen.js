import InfoBox from '../components/utilities/InfoBox';

function ThankYouScreen() {
  return (
    <div className="outlet_main">
      <div className='ThankYouContainer'>
        <h1>Welcome to Event Horizon!</h1>
        <br />
        <h2>What do you want to do next?</h2>
        <br />
        <div className="infoboxcontainer">
          <div className="infoboxcolumn">
            <InfoBox img={"./createEvent.jpg"} navTo={'/create_event'} title={'Create Event'} />
          </div>
          <div className="infoboxcolumn">
            <InfoBox img={"./browseEvents.jpg"} navTo={'/search'} title={'Browse Events'} />
          </div>
          <div className="infoboxcolumn">
            <InfoBox img={"./profile-Gerd Altmann Pixabay.jpg"} navTo={'/profile'} title={'Go to profile'} />
          </div>
        </div>
      </div>

    </div>
  );
}
export default ThankYouScreen;
