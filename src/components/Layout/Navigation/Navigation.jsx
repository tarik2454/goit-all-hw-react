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
  const navItemsRef = [useRef(null), useRef(null), useRef(null)];

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick = (event, index) => {
    event.preventDefault();

    navItemsRef.forEach((itemRef, i) => {
      if (i === index) {
        itemRef.current.classList.add('active');
      } else {
        itemRef.current.classList.remove('active');
      }
    });
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
          <GlobalStyledNavLink
            to="/"
            ref={navItemsRef[0]}
            onClick={e => handleClick(e, 0)}
          >
            Home
          </GlobalStyledNavLink>
        </StyledItem>
        <StyledItem ref={menuRef} onClick={handleToggle}>
          <GlobalStyledNavLink
            to="/home-movies"
            ref={navItemsRef[1]}
            onClick={e => handleClick(e, 1)}
          >
            Movies
          </GlobalStyledNavLink>
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
          <GlobalStyledNavLink
            to="/contacts"
            ref={navItemsRef[2]}
            onClick={e => handleClick(e, 2)}
          >
            Contact
          </GlobalStyledNavLink>
        </StyledItem>
      </StyledList>
    </StyledNavigation>
  );
};
