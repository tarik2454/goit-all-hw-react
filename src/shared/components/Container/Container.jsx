import styled from 'styled-components';

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: 375px;
  padding: 0 18px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 160px;
  }
`;
