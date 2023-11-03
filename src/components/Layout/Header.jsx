import React from 'react';
import { styled } from 'styled-components';
import { GlobalStyledContainer } from 'styles/GlobalStyle';

import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  return (
    <StyledHeader>
      <GlobalStyledContainer>
        <Navigation />
      </GlobalStyledContainer>
    </StyledHeader>
  );
};

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  padding: 16px 20px;
  color: white;
  background-color: ${({ theme }) => theme.colors.$secondaryBgColor};
  z-index: 1;
`;
