import React from 'react';
import ProductCard from './ProductCard';

export default async function ProductGrid() {
    const productsData = await fetch('http://localhost:3000/api/get-products', { method: 'GET' }).then((res) => res.json());
    
    return (
        <div className='grid grid-cols-3 gap-10'>
            {productsData.map((product) => (
                <ProductCard product={product}/>
            ))}
        </div>
    )
}