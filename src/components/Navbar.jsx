'use client'
import { useContext } from 'react';
import Link from 'next/link';
import { CartContext } from './Cart';
import { IconShoppingBag, IconPlant2 } from '@tabler/icons-react';

export default function Navbar() {
    const { cartQty } = useContext(CartContext);

    return (
        <div>
            <div className='p-4 border-b border-gray-300 fixed w-full bg-white z-10'>
                <nav className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
                    <Link href='/' className='text-gray-700 tracking-wide flex hover:text-gray-500'>
                        <IconPlant2 stroke={1} size={22} className='inline mr-1'/>
                        COZY THREADS
                    </Link>
                    <Link href='/cart' className={`flex items-center ${cartQty < 1 && 'mr-6'}`}>
                        <IconShoppingBag stroke={1}/>
                        { 
                            cartQty > 0 
                                && 
                            (<span className='bg-gray-100 text-gray-800 text-xs font-medium ml-1 px-2 py-0.5 rounded-full'>
                                {cartQty}
                            </span>)
                        }
                    </Link>
                </nav>
            </div>
        </div>
    )
}