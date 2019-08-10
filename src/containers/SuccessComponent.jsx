import React from 'react';
import { connect } from 'react-redux';

const SuccessComponent = ({ paymentId }) => {
  return (
    <div className="auth-successful">
      <h1>Your registration was successful!</h1>
      <h2>Your payment id is: {paymentId}</h2>
    </div>
  );
};

const mapStateToProps = state => ({
  paymentId: state.data.paymentDataId
});

export default connect(mapStateToProps)(SuccessComponent);
