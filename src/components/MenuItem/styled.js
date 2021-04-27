import styled from 'styled-components';

export const LinkArea = styled.div`
  a{
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    ${(props) => props.isActive && 'background-color: #0b4d0b'};
    border-radius: 10px;
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out 0s;

    &:hover {
      opacity: 1;
      background-color: #0b4d0b;
    };
  }
`;

export const LinkIcon = styled.img`
  width: 35px;
  height: auto;
`;
