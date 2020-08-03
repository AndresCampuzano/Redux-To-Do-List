import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  margin: ${({ theme }) => theme.padding};
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 8px 20px;
  /* background-color: ${({ theme }) => theme.orange}; */
  color: ${({ theme }) => theme.white};
  text-align: left;

  p {
      font-size: 1.3em;
      text-shadow: 0px 0px 2px rgba(0, 0, 0, 1);
  }

  button {
    border: none;
    background: none;
    width: 30px;
    outline: none;
    text-align: left;
  }
`;
