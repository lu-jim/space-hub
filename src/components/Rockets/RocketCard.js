import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import RocketBadge from './RocketBadge';
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
    <div className="row p-3 m-0 border-bottom" id={rocketId}>
      <div className="col-12 col-lg-3">
        <img
          src={flickrImages[0]}
          alt={rocketName}
          className="img-fluid"
        />
      </div>
      <div className="col-12 col-lg-9 p-2">
        <h2 className="d-flex gap-4">
          {rocketName}
          <RocketBadge
            isBooked={isBooked}
          />

        </h2>
        <p className="py-4">{description}</p>
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
