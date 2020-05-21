import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import background from "./cats/background.jpg";
import front from "./cats/front.png";
import { getRandomCats } from "./cats";
import ReactCardFlip from "react-card-flip";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

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

const MenuButton = styled.div`
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
`;

const Attempts = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Share Tech Mono", monospace;
  position: fixed;
  height: 15vw;
  width: 3vw;
  background: #ffdf3b;
  top: 250px;
  left: 0px;
  border-radius: 0px 25px 25px 0px;
  border: 2px dashed black;
  border-left-style: none;
  writing-mode: vertical-rl;
  user-select: none;
  align-items: center;
  text-orientation: sideways;
`;

const LevelChanger = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Share Tech Mono", monospace;
  position: fixed;
  height: 15vw;
  width: 3vw;
  background: #ffdf3b;
  top: 250px;
  right: 0px;
  border-radius: 25px 0px 0px 25px;
  border: 2px dashed black;
  border-right-style: none;
  writing-mode: vertical-rl;
  align-items: center;
  text-orientation: sideways;
  user-select: none;
  cursor: pointer;
`;

const ChooseYourLevelBox = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Share Tech Mono", monospace;
  height: 115px;
  width: 350px;
  background: #ffdf3b;
  border-radius: 15px;
  border: 2px dashed black;
  align-items: center;
  user-select: none;
  cursor: pointer;
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
  background: url(${background});
  font-family: "Asap Condensed", sans-serif;
  font-size: 1rem;
`;

const Game = styled.div`
  width: ${(props) =>
    props.columns > 4 ? props.columns * 80 : props.columns * 122}px;
  height: ${(props) => (props.rows > 4 ? props.rows * 80 : props.rows * 122)}px;
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

const Cat = ({ src, catId, index, isFlipped, onClick }) => {
  const handleClick = () => {
    onClick(catId, index);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Front onClick={handleClick} />
      <CatBox src={src} />
    </ReactCardFlip>
  );
};

const Front = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${front});
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

const levels = {
  0: {
    columns: 0,
    rows: 0,
  },
  1: {
    columns: 4,
    rows: 3,
  },
  2: {
    columns: 6,
    rows: 5,
  },
  3: {
    columns: 8,
    rows: 5,
  },
  4: {
    columns: 14,
    rows: 6,
  },
};

function App() {
  const [level, setLevel] = useState(0);
  const [firstCatId, setFirstCatId] = useState(undefined);
  const [firstCatIndex, setFirstCatIndex] = useState(undefined);
  const [secondCatId, setSecondCatId] = useState(undefined);
  const [secondCatIndex, setSecondCatIndex] = useState(undefined);
  const [waitForReset, setWait] = useState(false);
  const [revealedCats, setRevealedCats] = useState([]);
  const [attempts, setAttempts] = useState(0);

  const { columns, rows } = levels[level];
  const cats = useMemo(() => {
    return getRandomCats(rows * columns);
  }, [columns, rows]);

  const resetSelection = () => {
    setFirstCatId(undefined);
    setFirstCatIndex(undefined);
    setSecondCatId(undefined);
    setSecondCatIndex(undefined);
  };

  const resetTheGame = () => {
    resetSelection();
    setAttempts(0);
    setRevealedCats([]);
    setLevel(0);
  };

  const numberOfUniqueCats = cats.length / 2;
  const isWon = numberOfUniqueCats === revealedCats.length && level !== 0;
  useEffect(() => {
    if (firstCatId !== undefined && secondCatId !== undefined) {
      if (firstCatId !== secondCatId) {
        setWait(true);
        setTimeout(() => {
          resetSelection();
          setWait(false);
          setAttempts((prevAttempts) => prevAttempts + 1);
        }, 1000);
      } else {
        setRevealedCats((prevRevealedCats) =>
          prevRevealedCats.concat(firstCatId)
        );
        resetSelection();
        setAttempts((prevAttempts) => prevAttempts + 1);
      }
    }
  }, [firstCatId, secondCatId]);

  const onCatClick = (catId, index) => {
    if (!waitForReset) {
      if (firstCatId !== undefined) {
        setSecondCatId(catId);
        setSecondCatIndex(index);
      } else {
        setFirstCatId(catId);
        setFirstCatIndex(index);
      }
    }
  };
  const { width, height } = useWindowSize();
  return (
    <AppContainer>
      {isWon && <Confetti width={width} height={height} />}
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
        <Attempts>Attempts: {attempts}</Attempts>
        <LevelChanger>Change Level</LevelChanger>
        {!level ? (
          <ChooseYourLevelBox>
            Choose your level: <br />
            <button onClick={() => setLevel(1)}>1</button>
            <button onClick={() => setLevel(2)}>2</button>
            <button onClick={() => setLevel(3)}>3</button>
            <button onClick={() => setLevel(4)}>Pro</button>
          </ChooseYourLevelBox>
        ) : (
          <Game rows={rows} columns={columns}>
            {cats.map((cat, index) => (
              <Cat
                key={index}
                index={index}
                isFlipped={
                  index === firstCatIndex ||
                  index === secondCatIndex ||
                  revealedCats.includes(cat.catId)
                }
                onClick={onCatClick}
                {...cat}
              />
            ))}
          </Game>
        )}
        {isWon && <button onClick={resetTheGame}>New Game</button>}
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
