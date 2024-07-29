import { SpriteSVG } from 'assets/images/SpriteSVG';
import React, { useEffect, useRef, useState } from 'react';
import { GlobalStyledLink, GlobalStyledNavLink } from 'styles/GlobalStyle';
import {
  StyledItem,
  StyledList,
  StyledListInner,
  StyledNavigation,
  StyledSVG,
} from './Navigation.styled';

export const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleDocumentClick = event => {
      if (!menuRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <StyledNavigation>
      <StyledList>
        <StyledItem>
          <GlobalStyledNavLink to="/">Home</GlobalStyledNavLink>
        </StyledItem>
        <StyledItem ref={menuRef} onClick={handleToggle}>
          <GlobalStyledNavLink to="/home-movies">Movies</GlobalStyledNavLink>
          <StyledSVG>
            <SpriteSVG name={'down'} />
          </StyledSVG>

          <StyledListInner
            style={{
              display: isExpanded ? 'flex' : 'none',
            }}
          >
            <>
              <li>
                <GlobalStyledLink
                  style={{ fontSize: '14px' }}
                  to="/home-movies"
                >
                  Home
                </GlobalStyledLink>
              </li>
              <li>
                <GlobalStyledLink style={{ fontSize: '14px' }} to="/top-movies">
                  Top movies
                </GlobalStyledLink>
              </li>
              <li>
                <GlobalStyledLink
                  style={{ fontSize: '14px' }}
                  to="/search-movies"
                >
                  Search Movies
                </GlobalStyledLink>
              </li>
            </>
          </StyledListInner>
        </StyledItem>
        <StyledItem>
          <GlobalStyledNavLink to="/contacts">Contact</GlobalStyledNavLink>
        </StyledItem>
        <StyledItem>
          <GlobalStyledNavLink to="/leave-request">
            Leave request
          </GlobalStyledNavLink>
        </StyledItem>
      </StyledList>
    </StyledNavigation>
  );
};
