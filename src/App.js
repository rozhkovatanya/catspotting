import React from "react";
import styled from "styled-components";
import Game from "./Game";
import About from "./About";
import News from "./News";
import Contacts from "./Contacts";
import { Switch, Route, Link } from "react-router-dom";
import background from "./cats/background.jpg";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  background: powderblue;
  padding: 0.5rem;
`;

const Logo = styled.div`
  font-family: "Bangers", cursive;
  font-size: 5.5rem;
  color: #ffdf3b;
  position: fixed;
  top: 30px;
  left: 20px;
  transform: rotate(-10deg);
  text-shadow: black 6px 2px 1px;
  z-index: 1;
  user-select: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    position: static;
    transform: rotate(-3deg);
  }

  @media (max-width: 540px) {
    font-size: 3rem;
  }
`;

const Subheader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  font-size: 1.25rem;
  color: black;
  user-select: none;
`;

const MainNav = styled.div`
  padding-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuButton = styled.button`
  width: 100px;
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 5px 11px;
  justify-content: center;
  align-content: center;
  background: #ffdf3b;
  border: 2px dashed black;
  user-select: none;
  cursor: pointer;

  @media (max-width: 525px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 400px) {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${background});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px 5px 15px 5px;
  background: #57b9ea;
  font-size: 0.75rem;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <Logo>
          <Link to="/">Catspotting</Link>
        </Logo>

        <Subheader>
          ...the best way to leave the hustle and bustle behind
        </Subheader>
        <MainNav>
          <StyledLink to="/about">
            <MenuButton>About</MenuButton>
          </StyledLink>
          <StyledLink to="/news">
            <MenuButton>News</MenuButton>
          </StyledLink>
          <StyledLink to="/contacts">
            <MenuButton>Contacts</MenuButton>
          </StyledLink>
        </MainNav>
      </Header>
      <Switch>
        <Route exact path="/">
          <Game />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </Switch>

      <Footer>
        Remember folks, once you've spotted a cat - you can't stop until you
        find its mate ☝️
        <br />
        Catspotting - All rights reserved ©
      </Footer>
    </AppContainer>
  );
}

export default App;
