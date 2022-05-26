import PaymentBtn from './PaymentButton';

const Payment = ({
  product,
  paidFor,
  setPaidFor,
  setSuccess,
  eventId,
  userName,
}) => {
  return (
    <div>
      <PaymentBtn
        product={product}
        paidfor={paidFor}
        setPaidFor={setPaidFor}
        setSuccess={setSuccess}
        eventId={eventId}
        userName={userName}
      />
    </div>
  );
};

export default Payment;
