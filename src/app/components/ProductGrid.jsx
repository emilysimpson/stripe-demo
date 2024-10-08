import React from 'react';
import ProductCard from './ProductCard';

export default async function ProductGrid() {
    const productsData = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-products`, { method: 'GET' }).then((res) => res.json());
    
    return (
        <div className='grid grid-cols-3 gap-10'>
            {productsData.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    )
}