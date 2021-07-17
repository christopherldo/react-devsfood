import styled from 'styled-components';

export const Container = styled.div`
    width: 740px;
    padding: 10px;
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
    box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
`;
