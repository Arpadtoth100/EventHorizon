import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';
import { createAttendee } from '../../services/crud';
import { auth } from '../../config/firebase';

const PaymentBtn = ({
  product,
  paidFor,
  setPaidFor,
  setSuccess,
  eventId,
  userName,
}) => {
  const [error, setError] = useState(null);
  const handleApprove = (orderId) => {
    // call backend to fulfull order

    // if response is success:
    setPaidFor(true);
    createAttendee(eventId, auth.currentUser.uid, userName);
    setSuccess(true);
    // refresh users acc, subscription status

    //if response is error
    //alert user for failed order
    //setError("error message here")
  };

  return (
    <>
      {error && <div>We have encountered an error</div>}
      <PayPalButtons
        onClick={(data, actions) => {
          if (paidFor) {
            setError('Already bought this');
            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.title,
                amount: {
                  value: product.price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log('order', order);
          handleApprove(data.orderId);
        }}
        onCancel={() => {
          //display cancel msg, modal, redirect
        }}
        onError={(err) => {
          setError(err);
          console.error('error: ', err);
        }}
      />
    </>
  );
};

export default PaymentBtn;
