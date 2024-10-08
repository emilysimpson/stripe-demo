import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.NEXT_PUBLIC_SECRET_KEY);

export async function POST(req, res) {
  const data = await req.json();
  
  const cartTotal = data.cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  const totalCost = cartTotal * 100;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalCost,
      currency: data.currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({client_secret: paymentIntent.client_secret});
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: error.status || 500 });
  }
}