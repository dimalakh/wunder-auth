import React from 'react';
import Navigation from '../Navigation/Navigation';

const FirstStep = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    activeStep,
    activatePreviousStep
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
        name="firstName"
      />
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
        name="lastName"
      />
      <input
        type="tel"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.telephone}
        name="telephone"
      />
      {errors.firstName && touched.firstName && (
        <div id="feedback">{errors.firstName}</div>
      )}

      <Navigation
        activeStep={activeStep}
        handlePreviousClick={activatePreviousStep}
      />
    </form>
  );
};

export default FirstStep;
