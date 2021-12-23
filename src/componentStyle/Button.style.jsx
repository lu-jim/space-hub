import React from "react";
import PropTypes from 'prop-types'

const Button = ({ isRocketReserved, isMissionJoined, onClick }) => {
  let style = {
    borderRadius: '4px',
    padding: '0.5rem,',
    fontSize: '1.05rem',
  }

  let text = '';
  if (isRocketReserved != null) {
    style = {
      ...style,
      backgroundColor: isRocketReserved ? 'transparent' : '#007bff',
      color: isRocketReserved ? '#9aa0a5' : '#007bff',
      border: isRocketReserved ? '1px solid #9aa0a5' : '1px solid #007bff',
      alignSelf: 'flex-start',
      fontweight:
    }
  }
}