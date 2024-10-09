import { useContext } from 'react';
import Image from 'next/image';
import { IconX } from '@tabler/icons-react';
import { CartContext } from './Cart';


export default function CartProduct({ product, summary = true }) {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className='flex flex-wrap my-4 relative'>
            <Image src={product.imageSrc} width={200} height={300} className='object-cover w-4/12'/>
            <div className='flex flex-col grow px-8 py-4 w-8/12'>
                <div className='pb-2'>{product.productName}</div>
                <p className='text-sm pb-6 font-light'>{product.description}</p>
                <div className='flex flex-wrap justify-between text-sm'>
                    <p>${product.price}/ea</p>
                    <span>Qty: {product.qty}</span>
                </div>
                {summary && <button className='absolute top-0 right-0' onClick={() => removeFromCart(product.id)}><IconX stroke={1}/></button>}
            </div>
        </div>
    )
}