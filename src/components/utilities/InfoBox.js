import { NavLink } from 'react-router-dom';

function InfoBox(props) {
  return (
    <div>
      <img src="https://picsum.photos/300/200" alt="" />
      <p>
        <NavLink to={props.navTo}>{props.title}</NavLink>
      </p>
    </div>
  );
}

export default InfoBox;
