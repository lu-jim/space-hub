import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const BookButton = ({ onClickEvent, isBooked, rocketId }) => {
  const text = isBooked ? 'Cancel Reservation' : 'Book Rocket';
  const type = isBooked ? 'secondary' : 'primary';
  return (
    <Button variant={type} onClick={() => onClickEvent(rocketId)}>
      {text}
    </Button>
  );
};

BookButton.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  isBooked: PropTypes.bool,
  rocketId: PropTypes.number.isRequired,
};

BookButton.defaultProps = {
  isBooked: false,
};

export default BookButton;
