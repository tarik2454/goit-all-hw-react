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
  max-width: 100%;
  height: auto;
  margin-bottom: ${props => props.$marginBottom || ''};
  object-fit: cover;
`;

export const GlobalStyledH2 = styled.h2`
  margin-bottom: ${props => props.$marginBottom || '7px'};
  font-size: ${props => props.$fontSize || '17px'};
  font-weight: 500;
  text-align: ${props => props.$textAling || ''};
  color: ${({ theme }) => theme.colors.$secondaryTextColor};
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
