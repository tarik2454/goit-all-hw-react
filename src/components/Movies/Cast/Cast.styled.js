import { styled } from 'styled-components';
import { GlobalStyledImage } from 'styles/GlobalStyle';

export const StyledCastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const StyledCastItem = styled.li`
  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 3);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% - 45px) / 4);
  }
`;

export const StyledCastName = styled.h2`
  font-size: 15px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
  overflow: hidden;
  border-radius: 3px;
`;

export const StyledCastImage = styled(GlobalStyledImage)`
  transform: scale(1.03);
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
