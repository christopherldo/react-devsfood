import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f00;
`;

export const Menu = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: #136713;
  width: 80px;

  &:hover {
    a {
      opacity: 0.5;
      background-color: transparent;
    };
  };
`;

export const PageBody = styled.div`
  display: flex;
  background-color: #00980d;
  background-image: url('/assets/bg.png');
  flex: 1;
`;
