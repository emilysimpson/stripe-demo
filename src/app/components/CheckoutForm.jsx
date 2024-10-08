'use client'
import { useState, useContext } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { CartContext } from './Cart';
import CartProduct from './CartProduct';
import { IconAlertCircleFilled } from '@tabler/icons-react';

export default function CheckoutForm() {
    const [errorMessage, setErrorMessage] = useState(null);

    const stripe = useStripe();
    const elements = useElements();
    const { cartItems, cartTotal } = useContext(CartContext);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage(null);
        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {
              return_url: `${process.env.NEXT_PUBLIC_URL}/order-confirmation`,
            },
        });
        
        if (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <div className='flex flex-wrap gap-4 justify-between max-w-screen-lg mx-auto'>
            <div className='flex flex-col w-7/12'>
                <p className='text-xl mb-6'>Order Summary</p>
                {cartItems.map((item) => 
                    <CartProduct product={item} summary={false}/>
                )}
                <div className='flex justify-between border-t mt-2 pt-4 px-8'>
                    <p>Order Total</p>
                    <p>${cartTotal}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='w-4/12'>
                <label className='text-xl block pb-8'>Payment</label>
                <PaymentElement />
                <button disabled={!stripe} className='w-full hover:bg-gray-500 disabled:bg-slate-200 text-white rounded bg-gray-600 py-2 px-4 mt-4 transition ease-in-out text-center'>Submit</button>
                {
                    errorMessage 
                    && 
                    <div className='mt-4 text-sm flex justify-center align-center text-red-500'><IconAlertCircleFilled className='inline mr-1' size={18}/>
                        {errorMessage}
                    </div>
                }
            </form>
        </div>
    );
};