import React from 'react';
import { PropTypes } from 'prop-types';

import './Icon.css';

const Icon = props => (
  <i className="material-icons Icon">{props.icon}</i>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
