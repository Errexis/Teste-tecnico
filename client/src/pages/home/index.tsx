import React, { useState, useEffect } from 'react';
import { ProductProps, api } from "../../../lib/api"


export const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await api.getProduct();
        setProducts(res);
      } catch (err) {
        console.error(err);
      }
    }
    
    
    getProduct();
  }, []); // Empty dependency array means this effect will run only once after the initial render.


  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};