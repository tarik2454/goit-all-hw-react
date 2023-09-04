import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import {
  GlobalStyledH2,
  GlobalStyledImage,
  GlobalStyledLink,
} from 'styles/GlobalStyle';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledList>
      {movies.map(({ id, poster_path, title }) => (
        <StyledItem key={id}>
          <GlobalStyledLink to={`/movies/${id}`} state={{ from: location }}>
            <GlobalStyledImage
              $marginBottom="3px"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
            />
            <GlobalStyledH2 $fontSize="15px">{title}</GlobalStyledH2>
          </GlobalStyledLink>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const StyledItem = styled.li`
  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 3);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% - 45px) / 4);
  }
`;
