import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';

const PaymentBtn = ({ product, paidFor, setPaidFor, setDidPay }) => {
  const [error, setError] = useState(null);
  const [alreadyPaidFor, setAlreadyPaidFor] = useState(false);
  const handleApprove = (orderId) => {
    // call backend to fulfull order

    // if response is success:
    setPaidFor(true);
    setDidPay(true);
    // refresh users acc, subscription status

    //if response is error
    //alert user for failed order
    //setError("error message here")
  };

  return (
    <PayPalButtons
      onClick={(data, actions) => {
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
  );
};

export default PaymentBtn;
