import InfoBoxCreateEvent from "../components/InfoBoxCreateEvent";
import InfoBoxSearch from "../components/InfoBoxSearch";
import InfoBoxProfile from "../components/InfoBoxProfile";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

function ThankYouScreen() {
    return (
        <div>
            <Navbar />
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
            <Footer />

        </div>
    )
};
export default ThankYouScreen;
