import React from 'react';
import Geosuggest from 'react-geosuggest';

import Navigation from '../components/Navigation/Navigation';
import Form from '../components/Form';
import { updateData } from '../actions/data';
import { previousStep, nextStep } from '../actions/UI';
import { connect } from 'react-redux';
import { isValid } from '../selectors';

const SecondStep = ({
  values,
  activeStep,
  onChange,
  onPreviousClick,
  onSubmit,
  valid
}) => {
  const onGeosuggestChange = e => {
    onChange({
      address: e && e.description
    });
  };

  return (
    <Form values={values} onChange={onChange} onSubmit={onSubmit} valid={valid}>
      <label htmlFor="address">Address:</label>
      <Geosuggest
        id="address"
        className="auth-input__wrapper"
        inputClassName="auth-input"
        suggestsClassName="auth-input__suggestions"
        placeholder="Type your address..."
        initialValue={values.address}
        onSuggestSelect={onGeosuggestChange}
        required
      />

      <label htmlFor="city">City:</label>
      <input
        id="city"
        className="auth-input"
        type="text"
        name="city"
        placeholder="Type your city..."
        required
      />

      <label htmlFor="house">House number:</label>
      <input
        id="house"
        className="auth-input"
        type="string"
        name="house"
        placeholder="Type your house number..."
        required
      />

      <label htmlFor="zip">Zip code:</label>
      <input
        id="zip"
        className="auth-input"
        type="number"
        name="zipCode"
        placeholder="Type your zip code.."
        required
      />

      <Navigation
        activeStep={activeStep}
        onPreviousClick={onPreviousClick}
        valid={valid}
        required
      />
    </Form>
  );
};

const mapStateToProps = state => ({
  values: state.data,
  activeStep: state.UI.activeStep,
  valid: isValid(state, ['zipCode', 'house', 'city', 'address'])
});

const mapDispatchToProps = dispatch => ({
  onChange: values => dispatch(updateData(values)),
  onPreviousClick: () => dispatch(previousStep()),
  onSubmit: () => dispatch(nextStep())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondStep);
