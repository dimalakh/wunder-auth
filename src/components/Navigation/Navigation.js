import React from 'react';

const Navigation = ({ activeStep, onPreviousClick }) => {
  const showPreviousButton = activeStep > 1;

  return (
    <div>
      {showPreviousButton && (
        <button type="button" onClick={onPreviousClick}>
          Previous
        </button>
      )}
      <button type="submit">Submit</button>
    </div>
  );
};

export default Navigation;
