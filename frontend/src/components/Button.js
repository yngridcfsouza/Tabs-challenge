import styled from "styled-components";

export default styled.button`
  width: 100%;
  height: 52px;
  padding: 8px 16px;
  border: 2px solid #fff;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px rgba(27, 12, 12, 0.04);
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  color: #000;
  transition: background 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

`;
