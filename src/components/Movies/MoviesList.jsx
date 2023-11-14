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
            <ImageWrapper>
              <StyledImage
                $marginBottom="3px"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
              />
            </ImageWrapper>
            <StyledTitle $fontSize="15px">{title}</StyledTitle>
          </GlobalStyledLink>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export const StyledTitle = styled(GlobalStyledH2)`
  text-align: left;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const StyledItem = styled.li`
  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 3);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 45px) / 4);
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 5px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.$borderRadius};
`;

export const StyledImage = styled(GlobalStyledImage)`
  transform: scale(1.03);
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
