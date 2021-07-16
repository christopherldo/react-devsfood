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
    background-color: green;
`;

export const ProductPhoto = styled.img`
    width: 310px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`;

export const ProductDetails = styled.div`
    height: 50px;
    background-color: red;
`;

export const ProductQuantityArea = styled.div`
    height: 50px;
    background-color: blue;
`;
