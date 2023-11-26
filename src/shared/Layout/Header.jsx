import React from 'react';
import { styled } from 'styled-components';

export const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  padding: 16px 20px;
  color: white;
  background-color: ${({ theme }) => theme.colors.$secondaryBgColor};
  z-index: 1;
`;
