import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export const handler = async (event: APIGatewayEvent) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify(paymentIntent),
    };
  } catch (error) {
    console.debug(error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
}

interface APIGatewayEvent {
  body: string;
}