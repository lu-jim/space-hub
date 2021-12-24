import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ to }) => (
  <a className="ex-link border rounded-pill px-3 py-1 my-0 mx-1 text-decoration-none   " href={to} rel="noopener noreferrer" target="_blank">
    Read More
  </a>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Link;
