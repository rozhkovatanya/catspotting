import React from "react";
import styled from "styled-components";
import Game from "./Game";
import About from "./About";
import { Switch, Route, Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: center;
  font-family: "Bangers", cursive;
  font-size: 5.5rem;
  color: #ffdf3b;
  position: fixed;
  top: 30px;
  left: 2vw;
  transform: rotate(-10deg);
  text-shadow: black 6px 2px 1px;
  z-index: 1;
  user-select: none;
  cursor: pointer;
`;

const Subheader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  font-size: 2rem;
  padding: 5px 15px 5px 0px;
  background: powderblue;
  font-family: "Share Tech Mono", monospace;
  font-size: 1.25rem;
  color: black;
  user-select: none;
`;

const MainNav = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: powderblue;
  align-items: center;
`;

const MenuButton = styled.button`
  width: 100px;
  display: flex;
  margin: 0 16px;
  padding: 5px 11px;
  justify-content: center;
  align-content: center;
  font-family: "Share Tech Mono", monospace;
  background: #ffdf3b;
  border: 2px dashed black;
  user-select: none;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px 5px 15px 5px;
  background: #57b9ea;
  font-family: "Share Tech Mono", monospace;
  font-size: 0.75rem;
`;

function App() {
  return (
    <AppContainer>
      <Link to="/">
        <Header>Catspotting</Header>
      </Link>
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
      <Switch>
        <Route exact path="/">
          <Game />
        </Route>
        <Route exact path="/about">
          <About />
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
