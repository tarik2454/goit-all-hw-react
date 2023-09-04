import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api-services';
import { styled } from 'styled-components';
import {
  GlobalStyledButton,
  GlobalStyledH1,
  GlobalStyledH2,
  GlobalStyledImage,
  GlobalStyledSection,
} from 'styles/GlobalStyle';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.warn(error.message);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  const backLink = useRef(location.state?.from ?? '/top-movies');

  return (
    <GlobalStyledSection>
      <GlobalStyledH1>Movie details</GlobalStyledH1>
      <StyledCard>
        <StyledImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <StyledContent>
          <StyledTitle>{movie.title}</StyledTitle>
          <p style={{ marginBottom: '12px' }}>{movie.overview}</p>
          <GlobalStyledButton onClick={() => navigate(backLink.current)}>
            {/* <GlobalStyledLink to={backLink.current}>Go back</GlobalStyledLink> */}
            Go back
          </GlobalStyledButton>
        </StyledContent>
      </StyledCard>
    </GlobalStyledSection>
  );
};

export const StyledCard = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledImage = styled(GlobalStyledImage)`
  width: 45%;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled(GlobalStyledH2)`
  text-align: left;
`;
