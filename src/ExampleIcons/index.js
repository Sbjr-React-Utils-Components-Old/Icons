import React, { Fragment } from 'react';

import Icon, { CLASS_ICON } from '../Icon';

const ExampleIcons = () => (
  <Fragment>
    {
      Object.keys(CLASS_ICON).map(key => (
        <div key={key}>
          <p>
            id: { key }
          </p>
          <Icon
            classIcon={CLASS_ICON[key]}
          />
        </div>
      ))
    }
  </Fragment>
);

export default ExampleIcons;
