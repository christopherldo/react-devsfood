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
    max-width: 90vw;
    max-height: 90vh;
    background-color: #fff;
    margin: auto;
    border-radius: 20px;
    box-shadow: 0px 0px 50px #000;
    overflow: auto;
`;
