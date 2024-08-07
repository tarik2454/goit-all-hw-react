import { styled } from 'styled-components';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledSectionTitle>{title ? title : null}</StyledSectionTitle>
      {children}
    </StyledSection>
  );
};

export const StyledSection = styled.section`
  padding: 50px 0;
`;

export const StyledSectionTitle = styled.h1`
  margin-bottom: ${props => props.$marginBottom || '20px'};
  font-size: ${props => props.$fontSize || '22px'};
  font-weight: ${props => props.$fontWeigth || '600'};
  text-align: center;
  color: ${({ theme }) => theme.colors.$secondaryTextColor};
`;
