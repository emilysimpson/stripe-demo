'use client';
import { useContext, useState } from 'react';
import Image from 'next/image';
import { CartContext } from './Cart';

export default function ProductCard({product}) {
    const [showButton, setShowButton] = useState(false);
    const { addToCart } = useContext(CartContext)

    return (
        <div className='max-w-[409px]'>
            <button className='relative overflow-hidden' onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
                <Image src={product.imageSrc} width={409} height={500}/>
                <div 
                    className={`lg:absolute bg-white lg:hover:bg-gray-100 lg:w-full sm:w-auto text-gray-500 py-2 px-4 transition ease-in-out ${showButton ? 'lg:-translate-y-10' : 'lg:translate-y-0'}`}
                    onClick={() => addToCart(product)}    
                >
                    + Add to Cart
                </div>
            </button>
            <div className='text-wrap'>
                <div className='my-2'>{product.productName}</div>
                <p className='text-sm mb-1 font-light'>{product.description}</p>
                <p className='text-sm font-light'>${product.price}</p>  
            </div>
        </div>
    )
}