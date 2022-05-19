import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';

const PaymentBtn = ({ product }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    // call backend to fulfull order

    // if response is success:
    setPaidFor(true);
    // refresh users acc, subscription status

    //if response is error
    //alert user for failed order
    //setError("error message here")
  };

  if (paidFor) {
    //show success message, modal, redirect
    alert('thank you for the purchase');
  }

  if (error) {
    //display error msg, modal, redirect etc
    alert(error);
  }

  return (
    <PayPalButtons
      onClick={(data, actions) => {
        // validate on button click on client or server side
        const alreadyPaidFor = false;
        if (alreadyPaidFor) {
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
              description: product.description,
              amount: { value: product.price },
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
  );
};

export default PaymentBtn;
