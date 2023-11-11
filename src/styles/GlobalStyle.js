import { createGlobalStyle, styled } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.3;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.$primiryTextColor};
  background-color: ${({ theme }) => theme.colors.$primiryBgColor};
  }
`;

export const GlobalStyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: ${props => props.$marginBottom || '20px'};
  object-fit: cover;
`;

export const GlobalStyledH1 = styled.h1`
  margin-bottom: ${props => props.$marginBottom || '20px'};
  font-size: ${props => props.$fontSize || '22px'};
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.$secondaryTextColor};
`;

export const GlobalStyledH2 = styled.h2`
  margin-bottom: ${props => props.$marginBottom || '7px'};
  font-size: ${props => props.$fontSize || '17px'};
  font-weight: 500;
  text-align: ${props => props.$textAling || 'center'};
  color: ${({ theme }) => theme.colors.$secondaryTextColor};
`;

export const GlobalStyledButton = styled.button`
  display: block;
  width: fit-content;
  padding: ${props => props.$padding || '6px 8px'};
  font-size: ${props => props.$fontSize || '15px'};
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$accentColor};
  border: none;
  border-radius: ${({ theme }) => theme.$borderRadius};
  cursor: pointer;
  transition: ${({ theme }) => theme.$transition};

  &:hover {
    color: ${({ theme }) => theme.colors.$black};
    background-color: #0499c9;
  }
`;

export const GlobalStyledInput = styled.input`
  width: 100%;
  max-width: 400px;
  height: 35px;
  margin-bottom: 20px;
  padding: 5px 12px;
  color: inherit;
  border: 1px solid gray;
  border-radius: ${({ theme }) => theme.input.$borderRadius};

  &:focus {
    outline: transparent;
    border: 1px solid teal;
  }
`;

export const GlobalStyledLink = styled(Link)`
  display: inline-block;
  padding: ${props => props.$padding || '0 0'};
  font-size: ${props => props.$fontSize || '15px'};
  color: ${({ theme }) => theme.colors.$primiryTextColor};
  text-decoration: none;
  transition: ${({ theme }) => theme.$transition};

  &:hover {
    color: ${({ theme }) => theme.colors.$accentColor};
  }
`;

export const GlobalStyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: ${props => props.$padding || '0 0'};
  font-size: ${props => props.$fontSize || '15px'};
  color: ${({ theme }) => theme.colors.$primiryTextColor};
  text-decoration: none;
  transition: ${({ theme }) => theme.$transition};

  &:after {
    display: block;
    content: '';
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.$accentColor};
    transform-origin: left;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.$accentColor};
  }

  &.active {
    &:after {
      width: 100%;
    }
  }

  &:hover:not(.active) {
  }
`;

export const GlobalStyledMain = styled.main`
  min-height: calc(100vh - 50px);
  padding-top: 50px;
  padding-bottom: 50px;
`;
