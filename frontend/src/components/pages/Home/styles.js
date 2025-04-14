import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    margin-bottom: 16px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: #ddd;
    }
  }
`;




