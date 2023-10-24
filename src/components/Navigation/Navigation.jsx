import { SpriteSVG } from 'assets/images/SpriteSVG';
import React, { useEffect, useRef, useState } from 'react';
import { GlobalStyledNavLink } from 'styles/GlobalStyle';
import {
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

  // useEffect(() => {
  //   console.log(isExpanded);
  // }, [isExpanded]);

  useEffect(() => {
    // console.log(isExpanded);

    // Обработчик клика на всем документе
    const handleDocumentClick = event => {
      // console.log(event);
      // console.log(event.currentTarget);
      console.log(event.target);
      console.log(menuRef.current);

      // if (menuRef.current && !menuRef.current.contains(event.target)) {
      //   setIsExpanded(false);
      // }
    };

    // Добавляем обработчик при монтировании
    document.addEventListener('click', handleDocumentClick);

    // Убираем обработчик при размонтировании
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isExpanded]);

  return (
    <StyledNavigation>
      <StyledList>
        <li>
          <GlobalStyledNavLink to="/">Home</GlobalStyledNavLink>
        </li>
        <li onClick={handleToggle}>
          <GlobalStyledNavLink to="/top-movies">
            Movies
            <StyledSVG>
              <SpriteSVG name={'down'} />
            </StyledSVG>
          </GlobalStyledNavLink>
          <StyledListInner
            ref={menuRef}
            style={{
              display: isExpanded ? 'flex' : 'none',
            }}
          >
            <>
              <li>
                <GlobalStyledNavLink
                  style={{ fontSize: '14px' }}
                  to="/top-movies"
                >
                  Top movies
                </GlobalStyledNavLink>
              </li>
              <li>
                <GlobalStyledNavLink
                  style={{ fontSize: '14px' }}
                  to="/search-movies"
                >
                  Search Movies
                </GlobalStyledNavLink>
              </li>
            </>
          </StyledListInner>
        </li>
        <li>
          <GlobalStyledNavLink to="/contacts">Contact</GlobalStyledNavLink>
        </li>
      </StyledList>
    </StyledNavigation>
  );
};
