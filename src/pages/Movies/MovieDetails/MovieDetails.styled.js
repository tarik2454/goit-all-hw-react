import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledImage = styled.img`
  width: 55%;
  border-radius: ${props => props.theme.$borderRadius};
  overflow: hidden;
`;

export const StyledInner = styled.div`
  width: 45%;
`;

export const StyledCardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const StyledCardDescription = styled.p`
  margin-bottom: 7px;
`;

export const StyledInfoList = styled.ul`
  display: flex;

  gap: 35px;
  margin: 20px 0;
`;

export const StyledInfoItem = styled.li`
  font-size: 17px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 80px;
  padding: 8px 8px;
  border-radius: ${props => props.theme.$borderRadius};
  text-decoration: none;
  color: black;
  background-color: lightblue;

  &.active {
    color: white;
    background-color: ${props => props.theme.colors.$accentColor};
  }
`;
