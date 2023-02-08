import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { FormEvent } from 'react';

import Button from '../button/button.component';

import './payment-form.styles.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch('http://localhost:8888/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());

    const { client_secret } = response;

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    });

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
        <h2>
          Credit Card Payment:
        </h2>
        <CardElement />
        <Button buttonType="normal" label="Pay Now"></Button>
      </form>
    </div>
  );
};

export default PaymentForm;