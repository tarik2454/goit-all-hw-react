import { SpriteSVG } from 'images/SpriteSVG';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { GlobalStyledLink, GlobalStyledNavLink } from 'styles/GlobalStyle';

export const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = event => {
    // Проверяем, является ли элемент ссылкой
    if (event.target.tagName.toLowerCase() !== 'a') {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <StyledNavigation>
      <StyledList>
        <li>
          <GlobalStyledNavLink to="/">Home</GlobalStyledNavLink>
        </li>
        <li>
          <StyledListInner onClick={handleToggle}>
            <li>
              <StyledLink>
                <span>Movies</span>
                <StyledSVG>
                  <SpriteSVG name={'down'} />
                </StyledSVG>
              </StyledLink>
            </li>
            {isExpanded && (
              <>
                <li style={{ marginLeft: '7px' }}>
                  <GlobalStyledNavLink
                    style={{ fontSize: '14px' }}
                    to="/top-movies"
                  >
                    Top movies
                  </GlobalStyledNavLink>
                </li>
                <li style={{ marginLeft: '7px' }}>
                  <GlobalStyledNavLink
                    style={{ fontSize: '14px' }}
                    to="/search-movies"
                  >
                    Search Movies
                  </GlobalStyledNavLink>
                </li>
              </>
            )}
          </StyledListInner>
        </li>
        <li>
          <GlobalStyledNavLink to="/contacts">Contact</GlobalStyledNavLink>
        </li>
      </StyledList>
    </StyledNavigation>
  );
};

export const StyledNavigation = styled.nav``;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledListInner = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  span {
  }
`;

export const StyledSVG = styled.span`
  svg {
    width: 18px;
    height: 12px;
  }
  fill: ${({ theme }) => theme.colors.$primiryTextColor};
  transition: ${({ theme }) => theme.$transition};
`;

export const StyledLink = styled(GlobalStyledLink)`
  display: flex;
  gap: 2px;

  &:hover ${StyledSVG} {
    fill: ${({ theme }) => theme.colors.$accentColor};
  }
`;
