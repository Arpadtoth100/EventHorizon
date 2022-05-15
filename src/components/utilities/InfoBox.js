import { NavLink } from 'react-router-dom';

function InfoBox(props) {
  return (
    <div>
      <NavLink to={props.navTo}><img className='infoboxImg' src={props.img} alt="" /></NavLink>
      <p>
        <NavLink to={props.navTo}>{props.title}</NavLink>
      </p>
    </div>
  );
}

export default InfoBox;
