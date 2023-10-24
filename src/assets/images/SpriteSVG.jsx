import React from 'react';

export const SpriteSVG = ({ name }) => {
  switch (name) {
    case 'up':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M10.707 7.05 10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
        </svg>
      );
    case 'down':
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>down</title>
          <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
        </svg>
      );
    default:
      return null;
  }
};
