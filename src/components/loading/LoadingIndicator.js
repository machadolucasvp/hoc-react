import React, { Fragment } from 'react';
const LoadingIndicator = ({ loading }) => {
  return (
    <Fragment>
      {loading && <p>Loading...</p>}
    </Fragment>
  );
}

export default LoadingIndicator;