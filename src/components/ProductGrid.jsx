import React from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../../public/productData';

export default async function ProductGrid() {

    return (
        <div className='grid grid-cols-3 gap-10'>
            {productsData.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    )
}