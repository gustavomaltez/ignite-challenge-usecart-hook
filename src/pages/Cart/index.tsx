import React from 'react';
import CartItem from '../../components/CartItem';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';

const Cart = (): JSX.Element => {
  const { cart } = useCart();

  const total =
    formatPrice(
      cart.reduce((sumTotal, product) => {
        return sumTotal + (product.price * product.amount);
      }, 0)
    )
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        {cart.map(cartItem => (<CartItem data={cartItem} key={cartItem.id}/>))}
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
