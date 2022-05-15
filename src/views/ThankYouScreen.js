import ThankYou from "../components/utilities/ThankYou";

function ThankYouScreen() {
  return (
    <div className="outlet_main">
      <div className="thankyouContainer">
        <div className="thankyou">
          <div className="thankyouText">
            <br/>
            <h1>Welcome to Event Horizon!</h1>
            <br />
            <h2>What do you want to do next?</h2>
            <br />
          </div>
        </div>
        < ThankYou />
      </div>
    </div>
  );
}
export default ThankYouScreen;
