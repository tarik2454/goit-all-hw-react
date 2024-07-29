import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  GlobalStyledH2,
  GlobalStyledImage,
  GlobalStyledLink,
} from 'styles/GlobalStyle';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledList>
      {movies.map(movie => (
        <StyledListItem key={movie.id}>
          <StyledWrapper to={`/movies/${movie.id}`} state={{ from: location }}>
            <StyledImage
              $marginBottom="3px"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width="225"
              height="337"
              alt=""
            />
            <StyledContent>
              <GlobalStyledH2 $textAlign="left" $marginBottom="0">
                {movie.title || 'No name'}
              </GlobalStyledH2>
            </StyledContent>
          </StyledWrapper>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const StyledListItem = styled.li`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 2 * 15px) / 3);
  }

  @media screen and (min-width: 1400px) {
    width: calc((100% - 3 * 15px) / 4);
  }
`;

export const StyledWrapper = styled(GlobalStyledLink)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
`;

export const StyledImage = styled(GlobalStyledImage)`
  border-radius: ${props => props.theme.$borderRadius};
`;

export const StyledContent = styled.div`
  /* flex-grow: 1; */
`;
