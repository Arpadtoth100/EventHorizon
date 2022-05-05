import { NavLink } from 'react-router-dom';

function InfoBoxCreateEvent() {
    return (
        <div>
            <img src="https://picsum.photos/300/200" alt="" />
            <p><NavLink to="/create_event">Create Event</NavLink></p>
        </div>
    )
}

export default InfoBoxCreateEvent;