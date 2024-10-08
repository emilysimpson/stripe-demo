'use client'

import PaymentStatus from '../components/PaymentStatus';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

export default function OrderConfirmation() {

    return (
        <Elements stripe={stripePromise}>
            <PaymentStatus />
        </Elements>
    )
}