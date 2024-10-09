import React from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../../public/productData';

export default async function ProductGrid() {

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-items-center'>
            {productsData.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    )
}