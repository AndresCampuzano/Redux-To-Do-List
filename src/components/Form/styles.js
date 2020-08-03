import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.padding};
  height: 80px;
`;

export const FormStyle = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.img`
  width: 40px;
  -webkit-filter: drop-shadow(3px 3px 3px rgba(133, 133, 133, 0.5));
  filter: drop-shadow(3px 3px 3px rgba(133, 133, 133, 0.5));
`;

export const Button = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 35%;
  outline: none;
  -webkit-box-shadow: 0px 0px 17px -2px ${({ theme }) => theme.orange};
  -moz-box-shadow: 0px 0px 17px -2px ${({ theme }) => theme.orange};
  box-shadow: 0px 0px 17px -2px ${({ theme }) => theme.orange};
  background-color: ${({ theme }) => theme.orange};
  img {
    width: 10px;
  }
`;

export const Input = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  height: 40px;
  width: 200px;
  padding-left: 10px;
  border: none;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 17px -4px rgba(133, 133, 133, 0.83);
  -moz-box-shadow: 0px 0px 17px -4px rgba(133, 133, 133, 0.83);
  box-shadow: 0px 0px 17px -4px rgba(133, 133, 133, 0.83);
`;
