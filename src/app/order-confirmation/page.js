'use client'

import PaymentStatus from '../components/PaymentStatus';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Q6lQ02MR8XG5T2pNw9g4kGQ9tXt6dyI7Ye3u8DWvIGt7O0pOa8nIQ0AcqIH7Rhn8D4koU1M7iCdx3SqZgsEAfz600wU6AvLqN');

export default function OrderConfirmation() {

    return (
        <Elements stripe={stripePromise}>
            <PaymentStatus />
        </Elements>
    )
}