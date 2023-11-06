import { Section } from 'components/common/Section/Section';
import React from 'react';
import { styled } from 'styled-components';
import {
  GlobalStyledButton,
  GlobalStyledLink,
  GlobalStyledNavLink,
} from 'styles/GlobalStyle';

export const Home = () => {
  return (
    <Section title="React homework template">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis
        id, reiciendis et excepturi explicabo tenetur temporibus a consectetur
        at maxime sapiente nobis ab porro assumenda nemo. Ducimus, aliquam
        similique!
      </p>
      <GlobalStyledButton>GlobalStyledButton</GlobalStyledButton>
      <GlobalStyledLink>GlobalStyledLink</GlobalStyledLink>
      <GlobalStyledNavLink to="/" $marginRight="10px">
        NavLink
      </GlobalStyledNavLink>
      <GlobalStyledNavLink to="Home">NavLink</GlobalStyledNavLink>
      <StyledList>
        <StyledListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          blanditiis id, reiciendis et excepturi explicabo tenetur temporibus a
          consectetur at maxime sapiente nobis ab porro assumenda nemo. Ducimus,
          aliquam similique!
        </StyledListItem>
        <StyledListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          blanditiis id, reiciendis et excepturi explicabo tenetur temporibus a
          consectetur at maxime sapiente nobis ab porro assumenda nemo. Ducimus,
          aliquam similique!
        </StyledListItem>
        <StyledListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          blanditiis id, reiciendis et excepturi explicabo tenetur temporibus a
          consectetur at maxime sapiente nobis ab porro assumenda nemo. Ducimus,
          aliquam similique!
        </StyledListItem>
        <StyledListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          blanditiis id, reiciendis et excepturi explicabo tenetur temporibus a
          consectetur at maxime sapiente nobis ab porro assumenda nemo. Ducimus,
          aliquam similique!
        </StyledListItem>
        <StyledListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          blanditiis id, reiciendis et excepturi explicabo tenetur temporibus a
          consectetur at maxime sapiente nobis ab porro assumenda nemo. Ducimus,
          aliquam similique!
        </StyledListItem>
        <StyledListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          blanditiis id, reiciendis et excepturi explicabo tenetur temporibus a
          consectetur at maxime sapiente nobis ab porro assumenda nemo. Ducimus,
          aliquam similique!
        </StyledListItem>
        <StyledListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          blanditiis id, reiciendis et excepturi explicabo tenetur temporibus a
          consectetur at maxime sapiente nobis ab porro assumenda nemo. Ducimus,
          aliquam similique!
        </StyledListItem>
        <StyledListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          blanditiis id, reiciendis et excepturi explicabo tenetur temporibus a
          consectetur at maxime sapiente nobis ab porro assumenda nemo. Ducimus,
          aliquam similique!
        </StyledListItem>
        <StyledListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          blanditiis id, reiciendis et excepturi explicabo tenetur temporibus a
          consectetur at maxime sapiente nobis ab porro assumenda nemo. Ducimus,
          aliquam similique!
        </StyledListItem>
      </StyledList>
    </Section>
  );
};

export const StyledList = styled.ul`
  /* list-style: disc;
  padding-left: 30px; */
`;
export const StyledListItem = styled.li``;
