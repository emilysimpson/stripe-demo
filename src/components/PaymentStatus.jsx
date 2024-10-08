'use client'
import { useEffect, useState, useContext } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { CartContext } from './Cart';
import Spinner from './Spinner';
import Link from 'next/link';

export default function PaymentStatus() {
    const stripe = useStripe();
    const [message, setMessage] = useState(null);
    const { clearCart } = useContext(CartContext);
    
    useEffect(() => {
        if (!stripe) return;
        
        const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');
        
        const paymentMesage = stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case 'succeeded':
                    return 'Success! Your order has been placed.';
        
                case 'processing':
                    return "Payment processing. We'll update you when payment is received.";
        
                case 'requires_payment_method':
                    return 'Payment failed. Please try another payment method.';
        
                default:
                    return 'Oops, something went wrong.';
            }
        });

        clearCart();

        setMessage(paymentMesage);
    }, [stripe]);

    return (
        <div className='max-w-screen-md mx-auto my-8 text-center'>
            {
                message ?
                    <p className='mb-8'>{message}</p>
                : 
                    <Spinner />
            }
            <Link href='/' className='hover:bg-gray-100 text-gray-800 border rounded border-gray-500 py-2 px-4 transition ease-in-out'>Back to Shop</Link>
        </div>
    )
}