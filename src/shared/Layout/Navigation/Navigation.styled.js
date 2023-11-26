import styled from 'styled-components';
import { GlobalStyledLink } from 'styles/GlobalStyle';

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 50px;
`;

export const StyledItem = styled.li``;

export const StyledListInner = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 16px;
  background-color: ${({ theme }) => theme.colors.$secondaryBgColor};

  position: absolute;
  top: 55px;
  z-index: 1000;
`;

export const StyledSVG = styled.span`
  fill: ${({ theme }) => theme.colors.$primiryTextColor};
  transition: ${({ theme }) => theme.$transition};

  svg {
    width: 18px;
    height: 12px;
  }
`;

export const StyledLink = styled(GlobalStyledLink)`
  display: flex;
  gap: 2px;

  &:hover ${StyledSVG} {
    fill: ${({ theme }) => theme.colors.$accentColor};
  }
`;
