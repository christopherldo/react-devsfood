import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CartArea,
  CartHeader,
  CartIcon,
  CartText,
  CartBody,
  ProductsArea,
  ProductItem,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductQuantityArea,
} from './styled';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const [show, setShow] = useState(true);

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
        <ProductsArea>
          {products.map((item) => (
            <ProductItem key={item.id}>
              <ProductPhoto src={item.image} />

              <ProductInfoArea>
                <ProductName>
                  {item.name}
                </ProductName>

                <ProductPrice>
                  R$
                  {' '}
                  {parseFloat(item.price).toFixed(2).replace('.', ',')}
                </ProductPrice>
              </ProductInfoArea>

              <ProductQuantityArea>
                ...
              </ProductQuantityArea>
            </ProductItem>
          ))}
        </ProductsArea>
      </CartBody>
    </CartArea>
  );
};

export default Cart;
