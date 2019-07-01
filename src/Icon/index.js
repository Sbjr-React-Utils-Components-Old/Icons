import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

import { CLASS_ICON } from './constantes';

const Icon = ({
  classIcon,
  className,
  disabled,
  onClick,
  ...rest
}) => (
  <i
    className={`${classIcon} ${className} ${disabled ? 'disabled' : ''} ${onClick !== null ? 'clickable' : ''}`}
    onClick={disabled || onClick === null ? () => {} : onClick}
    {...rest}
  >
  </i>
);

Icon.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  classIcon: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  disabled: false,
  onClick: null,
  classIcon: CLASS_ICON.CROSS,
};

export default Icon;

export {
  CLASS_ICON,
};
