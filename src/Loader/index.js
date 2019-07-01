import React from 'react';

import Icon, { CLASS_ICON } from '../Icon';

import './style.less';

export default () => (
  <div className="loader-container">
    <Icon
      classIcon={CLASS_ICON.CIRCLE_NOTCH}
    />
  </div>
);
