import InfoBoxCreateEvent from "../components/InfoBoxCreateEvent";
import InfoBoxSearch from "../components/InfoBoxSearch";
import InfoBoxProfile from "../components/InfoBoxProfile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ThankYouScreen() {
    return (
        <div>
            <Navbar />
            <h1>Welcome to Event Horizon!</h1>
            <h2>What do you want to do next?</h2>
            <InfoBoxCreateEvent />
            <InfoBoxSearch />
            <InfoBoxProfile />
            <Footer />
        </div>
    )
};
export default ThankYouScreen;
