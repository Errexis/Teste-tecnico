import React, { useState, useEffect } from 'react';
import { CartProps, api } from "../../../lib/api"
interface Product {
  id: number;
  name: string;
  price: number;
}

export const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartProps[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    async function getCart() {
      try {
        const res = await api.getCart();
        setCartItems(res);
      } catch (err) {
        console.error(err);
      }
    }

    getCart();
  });


  /* const addToCart = (product: Product): void => {
    setCartItems([...cartItems, product]);
    setTotalPrice(totalPrice + product.price);
  }; */

  const removeFromCart = (productId: number): void => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    const removedProduct = cartItems.find(item => item.id === productId);
    if (removedProduct) {
      setTotalPrice(totalPrice - removedProduct.price);
    }
    setCartItems(updatedCart);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <div className="product-list">
        <h3>Available Products</h3>
        <ul>
          <li>
            <button onClick={() => addToCart({ id: 1, name: 'Product 1', price: 10 })}>Add Product 1</button>
          </li>
          <li>
            <button onClick={() => addToCart({ id: 2, name: 'Product 2', price: 20 })}>Add Product 2</button>
          </li>
          {/* Add more products as needed */}
        </ul>
      </div>
    </div>
  );
};
