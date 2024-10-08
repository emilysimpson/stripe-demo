'use client'
import { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CartContext } from '@/app/components/Cart';
import CheckoutForm from '@/app/components/CheckoutForm';
import Link from 'next/link';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

const fetchCheckout = async (cartItems) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/checkout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cartItems, currency: 'usd' }),
    });

    const {client_secret: clientSecret} = await res.json();
    return clientSecret;
}

export default async function Checkout() {
    const { cartItems, cartQty } = useContext(CartContext);

    return (
        <>
            {
                cartQty > 0 
                ?
                <Elements stripe={stripePromise} options={{ clientSecret: await fetchCheckout(cartItems) }}>
                    <CheckoutForm />
                </Elements>
                : 
                <div className='max-w-screen-md mx-auto my-8 text-center'>
                    <p className='mb-8 italic'>Your bag is currently empty.</p>
                    <Link href='/' className='hover:bg-gray-100 text-gray-800 border rounded border-gray-500 py-2 px-4 transition ease-in-out'>Continue Shopping</Link>
                </div>
            }
        </>
    )
}