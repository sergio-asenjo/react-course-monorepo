import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { FormEvent } from 'react';
import { useSelector } from 'react-redux';

import Button from '../button/button.component';
import { selectCartTotal } from '../../store/reducers/cart/cart.selector';
import { selectCurrentUser } from '../../store/reducers/user/user.selector';

import './payment-form.styles.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch(
      'http://localhost:8888/.netlify/functions/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }),
      }
    ).then((res) => res.json());

    const { client_secret } = response;

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: currentUser?.displayName || 'Anonymous',
        },
      },
    });

    setIsProcessingPayment(false);

    if (result.error) {
      console.debug(result.error.message);
    } else {
      if (result.paymentIntent?.status === 'succeeded') {
        console.debug('Payment succeeded!');
      }
    }
  };

  return (
    <div className="payment-form-container">
      <form className="form-container" onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button
          disabled={isProcessingPayment}
          isLoading={isProcessingPayment}
          buttonType="normal"
          label="Pay Now"
        ></Button>
      </form>
    </div>
  );
};

export default PaymentForm;
