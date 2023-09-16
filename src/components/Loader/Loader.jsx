import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingLines
      strokeColor="rgb(122, 62, 62)"
      strokeWidth="5"
      animationDuration="0.75"
      width="80"
      visible={true}
    />
  );
};
