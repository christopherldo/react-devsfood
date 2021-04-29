import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #136713;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: auto;
  height: 70px;
`;

export const SearchInput = styled.input`
  width: ${(props) => (props.active ? '300px' : '0px')};
  height: 50px;
  border: 0;
  border-radius: 25px;
  background-image: url('/assets/search.png');
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 10px center;
  outline: 0;
  padding-left: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;
`;
