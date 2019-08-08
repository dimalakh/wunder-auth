import React from 'react';

const Navigation = ({ activeStep, handlePreviousClick }) => {
  const showPreviousButton = activeStep > 1;

  return (
    <div>
      {showPreviousButton && (
        <button onClick={handlePreviousClick}>Previous</button>
      )}
      <button type="submit">Submit</button>
    </div>
  );
};

export default Navigation;
