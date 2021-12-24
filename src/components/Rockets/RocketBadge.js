import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';

const RocketBadge = ({ isBooked }) => {
  const text = isBooked ? 'Reserved' : 'Available';
  const type = isBooked ? 'success' : 'secondary';
  return (
    <Badge pill bg={type}>
      {text}
    </Badge>
  );
};

RocketBadge.propTypes = {
  isBooked: PropTypes.bool,
};

RocketBadge.defaultProps = {
  isBooked: false,
};

export default RocketBadge;
