import PaymentBtn from './PaymentButton';

const Payment = ({ product, paidFor, setPaidFor, setDidPay }) => {
  return (
    <div>
      <PaymentBtn
        product={product}
        paidfor={paidFor}
        setPaidFor={setPaidFor}
        setDidPay={setDidPay}
      />
    </div>
  );
};

export default Payment;
