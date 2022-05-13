import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Slider(props) {
  const [index, setIndex] = useState(1);

  const slideLeft = (event) => {
    event.preventDefault();

    if (index > 0) {
      setIndex((index) => index - 1);
    }
  };

  const slideRight = (event) => {
    event.preventDefault();

    if (index < props.imgSet.length - 1) {
      setIndex((index) => index + 1);
    }
  };

  const dotSet = () => {
    return props.imgSet.map((item, ind) => {
      return (
        <span
          className={`dot ${classNameHandler(ind)}`}
          onClick={clickHandler(ind)}
          key={item}
        />
      );
    });
  };

  const clickHandler = (ind) => {
    return () => setIndex(ind);
  };

  const classNameHandler = (ind) => {
    if (ind === index) return 'active';
  };

  return (
    <>
      <div className="main_slider">
        <a href="/" className="left_arrow" onClick={slideLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </a>
        <img src={props.imgSet[index]} alt="" />
        <a href="/" className="right_arrow" onClick={slideRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
      <div className="dotset">{dotSet()}</div>
    </>
  );
}

export default Slider;
