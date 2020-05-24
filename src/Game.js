import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { getRandomCats } from "./cats";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Flex } from "reflexbox/styled-components";
import Cat from "./Cat";
import Content from "./Content";

const Attempts = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Share Tech Mono", monospace;
  position: fixed;
  height: 15vw;
  width: 3vw;
  background: #ffdf3b;
  top: 20vw;
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
  top: 20vw;
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
  width: 450px;
  background: #ffdf3b;
  border-radius: 15px;
  border: 2px dashed black;
  flex-direction: column;
`;

const ChooseYourLevelText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  font-family: "Bangers", cursive;
  font-size: 2.5rem;
  color: powderblue;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  display: inline;
  position: relative;
  top: 23px;
`;

const LevelButton = styled.button`
  width: 75px;
  display: flex;
  margin: 0 16px;
  padding: 5px 11px;
  justify-content: center;
  align-content: center;
  font-family: "Share Tech Mono", monospace;
  background: powderblue;
  border: 2px dashed black;
  user-select: none;
  cursor: pointer;
`;

const NewGameButton = styled.button`
  width: 150px;
  display: flex;
  margin: 10px;
  padding: 5px 11px;
  justify-content: center;
  align-content: center;
  font-family: "Share Tech Mono", monospace;
  background: #ffdf3b;
  border: 2px dashed black;
  user-select: none;
  cursor: pointer;
`;

const CatsContainer = styled.div`
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

const Game = () => {
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
    <Content>
      {isWon && <Confetti width={width} height={height} />}

      {!level ? (
        <>
          <ChooseYourLevelText>Choose your level:</ChooseYourLevelText>
          <ChooseYourLevelBox>
            <Flex width="100%" p="2rem">
              <LevelButton onClick={() => setLevel(1)}>Noob</LevelButton>
              <LevelButton onClick={() => setLevel(2)}>Amateur</LevelButton>
              <LevelButton onClick={() => setLevel(3)}>Elite</LevelButton>
              <LevelButton onClick={() => setLevel(4)}>Pro</LevelButton>
            </Flex>
          </ChooseYourLevelBox>
        </>
      ) : (
        <>
          <Attempts>Attempts: {attempts}</Attempts>
          <LevelChanger onClick={resetTheGame}>Change Level</LevelChanger>

          <CatsContainer rows={rows} columns={columns}>
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
          </CatsContainer>
        </>
      )}
      {isWon && <NewGameButton onClick={resetTheGame}>New Game</NewGameButton>}
    </Content>
  );
};

export default Game;
