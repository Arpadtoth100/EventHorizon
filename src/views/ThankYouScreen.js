import InfoBoxCreateEvent from '../components/InfoBoxCreateEvent';
import InfoBoxSearch from '../components/InfoBoxSearch';
import InfoBoxProfile from '../components/InfoBoxProfile';

function ThankYouScreen() {
  return (
    <div>
      <h1>Welcome to Event Horizon!</h1>
      <h2>What do you want to do next?</h2>
      <div className="infoboxcontainer">
        <div className="infoboxcolumn">
          <InfoBoxCreateEvent />
        </div>
        <div className="infoboxcolumn">
          <InfoBoxSearch />
        </div>
        <div className="infoboxcolumn">
          <InfoBoxProfile />
        </div>
      </div>
    </div>
  );
}
export default ThankYouScreen;
