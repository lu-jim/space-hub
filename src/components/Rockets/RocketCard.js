import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import BookButton from './BookButton';
import { bookRocket } from '../../redux/rockets/rockets';

const RocketCard = (props) => {
  const {
    rocketId, description, rocketName, flickrImages, isBooked,
  } = props;

  const dispatch = useDispatch();
  const reserveRocket = (rocket) => {
    dispatch(bookRocket(rocket));
  };

  return (
    <div className="row p-3 m-0" id={rocketId}>
      <div className="col-6 col-lg-4">
        <img src={flickrImages[0]} alt="completed" className="img-fluid" />
      </div>
      <div className="col-6 col-lg-8 p-2">
        <h2>{rocketName}</h2>
        <p className="p-4">{description}</p>
        <BookButton
          isBooked={isBooked}
          rocketId={rocketId}
          onClickEvent={(rocketId) => reserveRocket(rocketId)}
        />
        {' '}
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocketId: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  isBooked: PropTypes.bool,
};

RocketCard.defaultProps = {
  isBooked: false,
};

export default RocketCard;
