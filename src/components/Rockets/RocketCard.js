import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { bookRocket } from '../../redux/rockets/rockets';

const RocketCard = (props) => {
  const {
    id, description, rocketName, flickrImages,
  } = props;
  const dispatch = useDispatch();
  const reserveRocket = (rocket) => {
    dispatch(bookRocket(rocket));
  };

  return (
    <div className="row p-3 m-0" id={id}>
      <div className="col-6 col-lg-4">
        <img src={flickrImages[0]} alt="completed" className="img-fluid" />
      </div>
      <div className="col-6 col-lg-8 p-2">
        <h2>{rocketName}</h2>
        <p className="p-4">{description}</p>
        <Button variant="primary" onClick={() => reserveRocket(id)}>
          Reserve Rocket
        </Button>
        {' '}
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RocketCard;
