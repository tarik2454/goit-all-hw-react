import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../../modules/Movies/services/movies-api-services';
import {
  StyledCard,
  StyledCardDescription,
  StyledCardTitle,
  StyledImage,
  StyledInfoItem,
  StyledInfoList,
  StyledInner,
  StyledNavLink,
} from './MovieDetails.styled';
import { Section } from '../../../shared/components/Section/Section';
import { Container } from '../../../shared/components/Container/Container';
import { Button } from 'shared/components/Button/Button';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.warn(error.message);
      });
  }, [movieId]);

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const backLink = useRef(location.state?.from ?? '/');

  return (
    <Section title={movie.title}>
      <Container>
        <Button
          $padding="7px 10px"
          $margin="0 0 15px 0"
          onClick={() => navigate(backLink.current)}
        >
          Go back
        </Button>
        {/* <Link to={backLink}>Go back</Link> */}

        <StyledCard>
          <StyledImage src={imageUrl} alt="" />
          <StyledInner>
            <StyledCardTitle>Overview</StyledCardTitle>
            <StyledCardDescription>{movie.overview}</StyledCardDescription>
            <StyledCardTitle>Genres</StyledCardTitle>
            <StyledCardDescription>
              {movie.genres
                ? movie.genres.map(item => item.name).join(', ')
                : ''}
            </StyledCardDescription>
          </StyledInner>
        </StyledCard>

        <hr />

        <StyledCardTitle>Additional information</StyledCardTitle>
        <StyledInfoList>
          <StyledInfoItem>
            <StyledNavLink to={'cast'}>Cast</StyledNavLink>
          </StyledInfoItem>
          <StyledInfoItem>
            <StyledNavLink to={'reviews'}>Reviews</StyledNavLink>
          </StyledInfoItem>
        </StyledInfoList>

        <Outlet />
      </Container>
    </Section>
  );
};

export default MovieDetails;
