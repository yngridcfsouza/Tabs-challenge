import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;

  small {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.danger.main};
    display: block;
    margin-top: 8px;
  }
`;
