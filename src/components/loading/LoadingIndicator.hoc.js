import React from 'react';
import LoadingIndicator from './LoadingIndicator';

const withLoadingIndicator = (Component) => {
  return ({ isLoading, ...passThroughProps }) => {
    if(isLoading) return <LoadingIndicator  />

    return (
      <Component {...passThroughProps} />
    )
  };
}
 
export default withLoadingIndicator;