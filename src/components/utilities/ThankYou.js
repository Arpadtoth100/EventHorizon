import InfoBox from './InfoBox';


export default function ThankYou() {
  return (
    <div>
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
  )
}
