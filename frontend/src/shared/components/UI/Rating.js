import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import "./Rating.css";

const Rating = (props) => {
  return (
    <div className="container-rating">
      <span>
        {props.value >= 1 ? (
          <FontAwesomeIcon icon={faStar} className="star-icon full" />
        ) : props.value >= 0.5 ? (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon half" />
        ) : (
          <FontAwesomeIcon icon={faStar} className="star-icon empty" />
        )}
      </span>
      <span>
        {props.value >= 2 ? (
          <FontAwesomeIcon icon={faStar} className="star-icon full" />
        ) : props.value >= 1.5 ? (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon half" />
        ) : (
          <FontAwesomeIcon icon={faStar} className="star-icon empty" />
        )}
      </span>
      <span>
        {props.value >= 3 ? (
          <FontAwesomeIcon icon={faStar} className="star-icon full" />
        ) : props.value >= 2.5 ? (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon half" />
        ) : (
          <FontAwesomeIcon icon={faStar} className="star-icon empty" />
        )}
      </span>
      <span>
        {props.value >= 4 ? (
          <FontAwesomeIcon icon={faStar} className="star-icon full" />
        ) : props.value >= 3.5 ? (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon half" />
        ) : (
          <FontAwesomeIcon icon={faStar} className="star-icon empty" />
        )}
      </span>
      <span className="final-star">
        {props.value >= 5 ? (
          <FontAwesomeIcon icon={faStar} className="star-icon full" />
        ) : props.value >= 4.5 ? (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon half" />
        ) : (
          <FontAwesomeIcon icon={faStar} className="star-icon empty" />
        )}
      </span>
      <span>{props.text && props.text}</span>
    </div>
  );
};

export default Rating;
