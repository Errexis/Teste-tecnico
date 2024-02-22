import React, { useState, useEffect } from 'react';
import { CartProps, api } from "../../../lib/api"
import './Cart.css'; 

export const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartProps[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    try {
      const res = await api.getCart();
      setCartItems(res);
      const total = res.reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(parseFloat(total));
    } catch (err) {
      console.error(err);
    }
  }

  const removeFromCart = (productId: number): void => {
    const removedProduct = cartItems.find(item => item.id === productId);
    if (removedProduct) {
      setTotalPrice(prevTotalPrice => prevTotalPrice - removedProduct.price);
    }
    const updatedCart = cartItems.splice(cartItems.indexOf(removedProduct), 1);
    setCartItems(updatedCart);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.products}  ${item.price}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}
