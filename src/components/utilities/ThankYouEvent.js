import InfoBox from './InfoBox';


export default function ThankYouEvent(props) {
    return (
        <div>
            <div className="thankyou">
                <div className="thankyouTitle">
                    <br />
                    <h1 className="thankyoutext">You successfully created your event!</h1>
                    <br />
                    <div className="thankyouQuestion">
                        <h2 className="thankyoutext">What do you want to do next?</h2>
                        <br />
                    </div>
                </div>
            </div>
            <div className="infoboxcontainer">
                <div className="infoboxcolumn">
                    <InfoBox img={"./createEvent2.jpg"} navTo={'/create_event'} title={'Create Another Event'} />
                </div>
                <div className="infoboxcolumn">
                    <InfoBox img={"./check events.jpg"} navTo={'/my_events'} title={'Check My Events Created'} />
                </div>
                <div className="infoboxcolumn">
                    <InfoBox img={"./profile-Gerd Altmann Pixabay.jpg"} navTo={'/profile'} title={'Go to profile'} />
                </div>
            </div>
        </div>
    )
}
