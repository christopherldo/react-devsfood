import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  ProductQtIcon,
  ProductQtText,
} from './styled';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const [show, setShow] = useState(true);

  const handleProductChange = (id, type) => {
    dispatch({
      type: 'CHANGE_PRODUCT',
      payload: {
        id,
        type,
      },
    });
  };

  useEffect(() => {
    if (products.length === 0) {
      setShow(false);
    }
  }, [products]);

  return (
    <>
      {products.length > 0
      && (
      <CartArea>
        <CartHeader onClick={() => products.length && setShow(!show)}>
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
                  <ProductQtIcon onClick={() => handleProductChange(item.id, '-')} src="./assets/minus.png" />

                  <ProductQtText>
                    {item.qt}
                  </ProductQtText>

                  <ProductQtIcon onClick={() => handleProductChange(item.id, '+')} src="./assets/plus.png" />
                </ProductQuantityArea>
              </ProductItem>
            ))}
          </ProductsArea>
        </CartBody>
      </CartArea>
      )}
    </>
  );
};

export default Cart;
