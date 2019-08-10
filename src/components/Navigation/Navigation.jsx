import './Navigation.scss';

import React from 'react';

const Navigation = ({ activeStep, onPreviousClick }) => {
  const showPreviousButton = activeStep > 1;
  const submitButtonText = activeStep === 3 ? 'Submit' : 'Next';

  return (
    <div className="navigation">
      {showPreviousButton && (
        <button
          className="navigation__button back"
          type="button"
          onClick={onPreviousClick}
        >
          &#8592; Previous
        </button>
      )}
      <button className="navigation__button primary" type="submit">
        {submitButtonText} &#8594;
      </button>
    </div>
  );
};

export default Navigation;
