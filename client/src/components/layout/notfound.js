import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const notfound = (props) => {
  return (
    <Fragment>
      <h1 className="x-large text-green">
        <i className="fas fa-exclamation-triangle">Page Not Found</i>
      </h1>
      <p className="large">Sorry, this page does not exist</p>
    </Fragment>
  );
};

notfound.propTypes = {};

export default notfound;
