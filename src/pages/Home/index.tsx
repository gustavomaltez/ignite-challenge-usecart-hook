import React, { useState, useEffect } from 'react';

import { ProductList } from './styles';
import { api } from '../../services/api';
import { useCart } from '../../hooks/useCart';
import Product from '../../components/Product';
import { formatPrice } from '../../util/format';
import { size } from 'polished';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const productsResponse = response.data;
      const productsFormated = productsResponse.map(
        (product: Product) => ({ ...product, priceFormatted: formatPrice(product.price) })
      );
      setProducts(productsFormated)
    }

    loadProducts();
  }, []);

  
  return (
    <ProductList>
      {products.map(product => (<Product data={{...product, cartItemsAmount}} key={String(product.id)}/>))}
    </ProductList>
  );
};

export default Home;
