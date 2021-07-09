import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    color: #136713;
    cursor: pointer;
`;

export const ProductPhotoArea = styled.div`
    width: 100px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin: 0 10px;
`;

export const ProductButtonArea = styled.div`
    width: 15px;
`;

export const ProductPhoto = styled.img`
    width: 100%;
`;

export const ProductName = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 14px;
`;

export const ProductIngredients = styled.div`
    font-size: 11px;
`;

export const ProductButton = styled.img`
    width: 15px;
`;
