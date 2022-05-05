import { NavLink } from 'react-router-dom';

function InfoBoxProfile() {
    return (
        <div>
            <img src="https://picsum.photos/300/200" alt="" />
            <p><NavLink to="/profile">Go to my profile page</NavLink></p>
        </div>
    )
}

export default InfoBoxProfile;