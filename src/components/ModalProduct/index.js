import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ProductArea,
  ProductButtons,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
  ProductName,
  ProductIngredients,
  ProductButton,
  ProductQuantity,
  ProductQtImage,
  ProductQtText,
  ProductPrice,
} from './styled';

const ModalProduct = ({ data, setStatus }) => {
  const [qt, setQt] = useState(1);

  const handleMinusQt = () => {
    if (qt > 1) setQt(qt - 1);
  };

  const handlePlusQt = () => {
    setQt(qt + 1);
  };

  const handleAddToCart = () => {
    setStatus(false);
  };

  useEffect(() => {
    setQt(1);
  }, [data]);

  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image} />

        <ProductInfoArea>
          <ProductDetails>
            <ProductName>
              {data.name}
            </ProductName>

            <ProductIngredients>
              {data.ingredients}
            </ProductIngredients>
          </ProductDetails>

          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage onClick={handleMinusQt} src="./assets/minus.png" />

              <ProductQtText>
                {qt}
              </ProductQtText>

              <ProductQtImage onClick={handlePlusQt} src="./assets/plus.png" />
            </ProductQuantity>

            <ProductPrice>
              R$
              {' '}
              {parseFloat(data.price * qt).toFixed(2).replace('.', ',')}
            </ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>

      <ProductButtons>
        <ProductButton small onClick={() => setStatus(false)}>Cancelar</ProductButton>

        <ProductButton onClick={handleAddToCart}>Adicionar ao Carrinho</ProductButton>
      </ProductButtons>
    </Container>
  );
};

ModalProduct.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    id_cat: PropTypes.number,
    image: PropTypes.string,
    ingredients: PropTypes.string,
    name: PropTypes.string,
    points: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default ModalProduct;
