import { useContext } from 'react';
import { CartContext } from './Cart';
import Link from 'next/link';

export default function CartSummary() {
    const { cartQty, cartTotal } = useContext(CartContext);

    return (
        <div className='flex flex-col h-full'>
            <div className='flex text-lg justify-between border-b pb-2 mb-2'>
                <span>My Bag</span>
                <span>{cartQty} Items</span>
            </div>
            <div className='flex text-sm justify-between border-b pb-2 mb-4'>
                <span>Estimated Total</span>
                <span>${cartTotal}</span>
            </div>
            {
                cartQty > 0 && 
                <Link href='/checkout' className='w-full hover:bg-gray-500 text-white rounded bg-gray-600 py-2 px-4 mt-auto transition ease-in-out text-center'>Checkout</Link>
            }
        </div>
    )
}