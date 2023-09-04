import React from 'react';
import { styled } from 'styled-components';
import { GlobalStyledContainer } from 'styles/GlobalStyle';

export const Header = () => {
  return (
    <StyledHeader>
      <GlobalStyledContainer>Header</GlobalStyledContainer>
    </StyledHeader>
  );
};

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 40px;
  color: white;
  background-color: teal;
  z-index: 1;
`;
