import styled from 'styled-components';

export const Background = styled.div``;

export const Modal = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 40%;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 17px -4px rgba(133, 133, 133, 0.83);
  -moz-box-shadow: 0px 0px 17px -4px rgba(133, 133, 133, 0.83);
  box-shadow: 0px 0px 17px -4px rgba(133, 133, 133, 0.83);
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.darkBlue};
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const ButtonModalDelete = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.orange};
  padding: 10px 10px;
`;

export const ButtonModalCancel = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.lightGray};
  padding: 10px 10px;
`;
