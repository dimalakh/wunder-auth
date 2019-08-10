import React from 'react';
import { connect } from 'react-redux';

const SuccessComponent = ({ paymentId }) => {
  return (
    <>
      <h1>Your registration was successful!</h1>
      <h2>Your payment id is: {paymentId}</h2>
    </>
  );
};

const mapStateToProps = state => ({
  paymentId: state.data.paymentDataId
});

export default connect(mapStateToProps)(SuccessComponent);
