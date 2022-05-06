import { NavLink } from 'react-router-dom';

function InfoBoxSearch() {
    return (
        <div>
            <img src="https://picsum.photos/300/200" alt="" />
            <p><NavLink to="search">Look Through Events</NavLink></p>
        </div>
    )
}

export default InfoBoxSearch;