import React from "react";
import { PropTypes } from "prop-types";

const Badge = ({ text, isActive = false }) => {
  const style = {
    padding: '0.1rem 0.3rem',
    backgroundColor: isActive ? '#18a2b8' : '#6d757d',
    color: '#fff',
    textTransform: isActive ? 'capitalize' : 'uppercase',
    alignSelf: 'flex-start',
    borderRadius: '4px',
    display: 'inline-flex'
  }
}