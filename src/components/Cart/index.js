import React from 'react';
import {
  CartArea, CartHeader, CartIcon, CartText, CartBody,
} from './styled';

const Cart = () => (
  <CartArea>
    <CartHeader>
      <CartIcon src="/assets/cart.png" />
      <CartText>Meu Carrinho (x)</CartText>
    </CartHeader>
    <CartBody />
  </CartArea>
);

export default Cart;
