import PaymentBtn from './PaymentButton';

const Payment = ({ product, paidFor, setPaidFor }) => {
  return (
    <div>
      <PaymentBtn product={product} paidfor={paidFor} setPaidFor={setPaidFor} />
    </div>
  );
};

export default Payment;
