import PaymentBtn from './PaymentButton';

const Payment = () => {
  const product = {
    description: 'whatever product',
    price: 69.69,
  };
  return (
    <div>
      <PaymentBtn product={product} />
    </div>
  );
};

export default Payment;
