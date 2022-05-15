import ThankYou from "../components/utilities/ThankYou";

function ThankYouScreen() {
  return (
    <div className="outlet_main">
      <div>
        <div className="thankyou">
          <div className="thankyouTitle">
            <br/>
            <h1>Welcome to Event Horizon!</h1>
            <br />
            <div className="thankyouQuestion">
            <h2>What do you want to do next?</h2>
            <br />
            </div>
          </div>
        </div>
        <div className="thankyouContainer">
        < ThankYou />
        </div>
        
      </div>
    </div>
  );
}
export default ThankYouScreen;
