import { eventCardData } from "../services/eventCardData";
import EventCard from "../components/EventCard";

const MainScreen = () => {

    const cards = eventCardData.map(item => {
        return (
            <EventCard
                key={item.id}
                {...item}
            />
        )
    })

    return <>

        <div className="main">
            <h2>MainScreen</h2>
            <h3>Recent events</h3>
            <section className="cards-list">
                {cards}
            </section>
            <h3>Paid events</h3>
            <section className="cards-list">
                {cards}
            </section>

        </div>
    </>
};

export default MainScreen;