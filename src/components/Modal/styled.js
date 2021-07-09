import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    display: ${(props) => (props.status ? 'flex' : 'none')};
`;

export const ModalBody = styled.div`
    width: 300px;
    height: 300px;
    background-color: #fff;
    margin: auto;
`;
