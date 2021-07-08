import styled from 'styled-components';

export const Container = styled.div`
    width: 80px;
    height: 80px;
    background-color: ${(props) => (props.active === props.id ? '#fff' : '#aae09a')};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.3s ease-in-out 0s;
`;

export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
`;
