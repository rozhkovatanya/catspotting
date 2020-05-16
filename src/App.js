import React, { useState } from "react";
import styled from "styled-components";
import bc from "./cats/bc.jpg";
import back from "./cats/back.png";
import { getRandomCats } from "./cats";
import ReactCardFlip from "react-card-flip";

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
`;

const MainNav = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: powderblue;
  align-items: center;
`;

const MenuButton = styled.div`
  width: 100px;
  display: flex;
  margin: 0 16px;
  padding: 5px 11px;
  justify-content: center;
  align-content: center;
  font-family: "Share Tech Mono", monospace;
  background: #ffdf3b;
  border-style: dashed;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${bc});
  font-family: "Asap Condensed", sans-serif;
  font-size: 1rem;
`;

const Game = styled.div`
  width: 992px;
  height: 492px;
  background: white;
  display: grid;
  grid-template-rows: ${(props) => generateFrs(props.rows)};
  grid-template-columns: ${(props) => generateFrs(props.columns)};
  padding: 0.5rem;
  grid-gap: 0.5rem;
`;

const CatBox = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: contain;
`;

const Cat = ({ src }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((isFlipped) => !isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Front onClick={handleClick} />
      <CatBox src={src} onClick={handleClick} />
    </ReactCardFlip>
  );
};

const Front = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${back});
  background-size: contain;
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

const arrayOfSize = (size) => Array.from(Array(size));
const generateFrs = (num) =>
  arrayOfSize(num)
    .map(() => "1fr")
    .join(" ");

function App() {
  const rows = 4;
  const columns = 8;
  return (
    <AppContainer>
      <Header>Catspotting</Header>
      <Subheader>
        ...the best way to leave the hustle and bustle behind
      </Subheader>
      <MainNav>
        <MenuButton>About</MenuButton>
        <MenuButton>News</MenuButton>
        <MenuButton>Contacts</MenuButton>
      </MainNav>
      <Content>
        <Game rows={rows} columns={columns}>
          {getRandomCats(rows * columns).map((cat, index) => (
            <Cat key={index} {...cat} />
          ))}
        </Game>
      </Content>
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
