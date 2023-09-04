import { Navigation } from 'components/ui/Navigation';
import React from 'react';
import { styled } from 'styled-components';
import { GlobalStyledH2 } from 'styles/GlobalStyle';

export const SideBar = () => {
  return (
    <StyledSideBar>
      <StyledContent>
        <GlobalStyledH2 $marginBottom="20px">Menu</GlobalStyledH2>
        <Navigation />
      </StyledContent>
    </StyledSideBar>
  );
};

export const StyledSideBar = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 200px;
  padding: 15px 20px;
  background-color: lightblue;
`;

export const StyledContent = styled.div`
  position: fixed;
  width: 100px;
`;
