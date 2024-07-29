import { Container } from '../../shared/components/Container/Container';
import { Section } from '../../shared/components/Section/Section';
import React from 'react';
import { Button } from 'shared/components/Button/Button';
import { styled } from 'styled-components';
import { GlobalStyledLink, GlobalStyledNavLink } from 'styles/GlobalStyle';

const Home = () => {
  return (
    <Section title="React homework template">
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          blanditiis id, reiciendis et excepturi explicabo tenetur temporibus a
          consectetur at maxime sapiente nobis ab porro assumenda nemo. Ducimus,
          aliquam similique!
        </p>
        <Button>Button</Button>
        <GlobalStyledLink>GlobalStyledLink</GlobalStyledLink>
        <GlobalStyledNavLink to="/" $marginRight="10px">
          NavLink
        </GlobalStyledNavLink>
        <GlobalStyledNavLink to="Home">NavLink</GlobalStyledNavLink>
        <StyledList>
          <StyledListItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            blanditiis id, reiciendis et excepturi explicabo tenetur temporibus
            a consectetur at maxime sapiente nobis ab porro assumenda nemo.
            Ducimus, aliquam similique!
          </StyledListItem>
          <StyledListItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            blanditiis id, reiciendis et excepturi explicabo tenetur temporibus
            a consectetur at maxime sapiente nobis ab porro assumenda nemo.
            Ducimus, aliquam similique!
          </StyledListItem>
          <StyledListItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            blanditiis id, reiciendis et excepturi explicabo tenetur temporibus
            a consectetur at maxime sapiente nobis ab porro assumenda nemo.
            Ducimus, aliquam similique!
          </StyledListItem>
          <StyledListItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            blanditiis id, reiciendis et excepturi explicabo tenetur temporibus
            a consectetur at maxime sapiente nobis ab porro assumenda nemo.
            Ducimus, aliquam similique!
          </StyledListItem>
          <StyledListItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            blanditiis id, reiciendis et excepturi explicabo tenetur temporibus
            a consectetur at maxime sapiente nobis ab porro assumenda nemo.
            Ducimus, aliquam similique!
          </StyledListItem>
          <StyledListItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            blanditiis id, reiciendis et excepturi explicabo tenetur temporibus
            a consectetur at maxime sapiente nobis ab porro assumenda nemo.
            Ducimus, aliquam similique!
          </StyledListItem>
          <StyledListItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            blanditiis id, reiciendis et excepturi explicabo tenetur temporibus
            a consectetur at maxime sapiente nobis ab porro assumenda nemo.
            Ducimus, aliquam similique!
          </StyledListItem>
          <StyledListItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            blanditiis id, reiciendis et excepturi explicabo tenetur temporibus
            a consectetur at maxime sapiente nobis ab porro assumenda nemo.
            Ducimus, aliquam similique!
          </StyledListItem>
          <StyledListItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            blanditiis id, reiciendis et excepturi explicabo tenetur temporibus
            a consectetur at maxime sapiente nobis ab porro assumenda nemo.
            Ducimus, aliquam similique!
          </StyledListItem>
        </StyledList>
      </Container>
    </Section>
  );
};

export const StyledList = styled.ul`
  /* list-style: disc;
  padding-left: 30px; */
`;
export const StyledListItem = styled.li``;

export default Home;
