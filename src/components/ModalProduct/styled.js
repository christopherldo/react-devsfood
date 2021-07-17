import styled from 'styled-components';

export const Container = styled.div`
    width: 650px;
    padding: 20px;
    color: #136713;
`;

export const ProductArea = styled.div`
    height: 200px;
    display: flex;
`;

export const ProductButtons = styled.div`
    height: 50px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const ProductPhoto = styled.img`
    width: 310px;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: 0 10px;
`;

export const ProductDetails = styled.div``;

export const ProductQuantityArea = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
`;

export const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductIngredients = styled.div`
    font-size: 14px;
`;

export const ProductButton = styled.button`
    border: 0;
    background-color: #073c07;
    box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.16);
    color: #fff;
    font-size: ${(props) => (props.small ? '12px' : '22px')};
    font-weight: bold;
    padding: 10px 20px;
    margin-left: 15px;
    border-radius: 5px;
    cursor: pointer;
`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductQtImage = styled.img`
    width: 25px;
    height: auto;
    background-color: #073c07;
    padding: 5px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
`;

export const ProductQtText = styled.div`
    font-size: 25px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
`;
