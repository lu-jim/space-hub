import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ to }) => (
  <a className="ex-link border rounded-pill px-1 py-1 my-0 px-xxl-3 mx-xxl-3 mb-2 text-decoration-none text-center" href={to} rel="noopener noreferrer" target="_blank">
    Read More
  </a>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Link;
