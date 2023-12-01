import React from 'react';
import styled from 'styled-components';

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  display: block;
  width: ${props => props.$width || 'fit-content'};
  margin: ${props => props.$margin || '0 0'};
  padding: ${props => props.$padding || '6px 8px'};
  font-size: ${props => props.$fontSize || '15px'};
  font-weight: ${props => props.$fontWeight || '400'};
  line-height: ${props => props.$lineHeight || 'inherit'};
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$accentColor};
  border: none;
  border-radius: ${({ theme }) => theme.$borderRadius};
  cursor: pointer;
  transition: ${({ theme }) => theme.$transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.$white};
    background-color: #0499c9;
  }

  @media screen and (min-width: 768px) {
    max-width: 416px;
  }
`;
