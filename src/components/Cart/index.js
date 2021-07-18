import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CartArea, CartHeader, CartIcon, CartText, CartBody,
} from './styled';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const [show, setShow] = useState(false);

  return (
    <CartArea>
      <CartHeader onClick={() => setShow(!show)}>
        <CartIcon src="/assets/cart.png" />

        <CartText>
          Meu Carrinho (
          {products.length}
          )
        </CartText>
        {show
        && <CartIcon src="./assets/down.png" />}
      </CartHeader>
      <CartBody show={show}>
        <div style={{ height: 300, backgroundColor: 'red' }} />
      </CartBody>
    </CartArea>
  );
};

export default Cart;
