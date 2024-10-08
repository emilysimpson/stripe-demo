'use client'

import { useState, createContext, useContext } from 'react';
import CartProduct from './CartProduct';
import CartSummary from './CartSummary';
import Link from 'next/link';

export const CartContext = createContext({
    cartItems: [],
    cartQty: 0,
    cartTotal: 0,
    addToCart: () => {},
    removeFromCart: () => {},
    updateItemQty: () => {}
});

export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingProductIdx = cartItems.findIndex((item => {
            return item.id === product.id;
        }));
        if (existingProductIdx !== -1) {
            const existingProduct = cartItems[existingProductIdx];
            const updatedProduct = existingProduct;
            updatedProduct.qty += 1;
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingProductIdx] = updatedProduct;
            setCartItems(updatedCartItems);
        } else {
            product.qty = 1;
            setCartItems([...cartItems, product]);
        }
    }

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
    }

    const updateItemQty = (productId) => {
        const productIdx = cartItems.findIndex((item => {
           return item.id === productId;
        }));
        const product = cartItems[productIdx];
        const updatedProduct = {
            ...product,
            qty: product.qty + 1
        }
        const updatedCartItems = [...cartItems];
        updatedCartItems[productIdx] = updatedProduct;
        setCartItems(updatedCartItems);
    } 

    const clearCart = () => {
        setCartItems([]);
    }

    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

    const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemQty, clearCart, cartQty, cartTotal, cartQty }}>
            {children}
        </CartContext.Provider>
    )
}

export const Cart = () => {
    const { cartItems, cartQty } = useContext(CartContext);

    return (
        <div className='flex flex-wrap gap-4 justify-between max-w-screen-lg mx-auto'>
            <div className='w-7/12'>
                <div className='border-b border-gray-300 my-4'>
                    { cartQty > 0 ?
                        cartItems.map((item) => 
                            <CartProduct product={item} key={item.id}/>
                        )
                        :
                        <p className='mb-2 italic'>Your bag is currently empty.</p>
                    }
                </div>
                <Link href='/' className='hover:bg-gray-100 text-gray-800 border rounded border-gray-500 py-2 px-4 transition ease-in-out'>Continue Shopping</Link>
            </div>
            <div className='w-4/12 border border-gray-300 rounded p-4 h-96'>
                <CartSummary/>
            </div>
        </div>
    )
}