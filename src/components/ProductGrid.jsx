import React from 'react';
import ProductCard from './ProductCard';

export default async function ProductGrid({productsData}) {

    return (
        <div className='grid grid-cols-3 gap-10'>
            {productsData.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    )
}