import shuffle from "lodash/shuffle";

import cat01 from "./cats/cat01.png";
import cat02 from "./cats/cat02.png";
import cat03 from "./cats/cat03.png";
import cat04 from "./cats/cat04.png";
import cat05 from "./cats/cat05.png";
import cat06 from "./cats/cat06.png";
import cat07 from "./cats/cat07.png";
import cat08 from "./cats/cat08.png";
import cat09 from "./cats/cat09.png";
import cat10 from "./cats/cat10.png";
import cat11 from "./cats/cat11.png";
import cat12 from "./cats/cat12.png";
import cat13 from "./cats/cat13.png";
import cat14 from "./cats/cat14.png";
import cat15 from "./cats/cat15.png";
import cat16 from "./cats/cat16.png";
import cat17 from "./cats/cat17.png";
import cat18 from "./cats/cat18.png";
import cat19 from "./cats/cat19.png";
import cat20 from "./cats/cat20.png";
import cat21 from "./cats/cat21.png";
import cat22 from "./cats/cat22.png";
import cat23 from "./cats/cat23.png";
import cat24 from "./cats/cat24.png";
import cat25 from "./cats/cat25.png";
import cat26 from "./cats/cat26.png";
import cat27 from "./cats/cat27.png";
import cat28 from "./cats/cat28.png";
import cat29 from "./cats/cat29.png";
import cat30 from "./cats/cat30.png";
import cat31 from "./cats/cat31.png";
import cat32 from "./cats/cat32.png";
import cat33 from "./cats/cat33.png";
import cat34 from "./cats/cat34.png";
import cat35 from "./cats/cat35.png";
import cat36 from "./cats/cat36.png";
import cat37 from "./cats/cat37.png";
import cat38 from "./cats/cat38.png";
import cat39 from "./cats/cat39.png";
import cat40 from "./cats/cat40.png";
import cat41 from "./cats/cat41.png";
import cat42 from "./cats/cat42.png";

export const cats = [
  cat01,
  cat02,
  cat03,
  cat04,
  cat05,
  cat06,
  cat07,
  cat08,
  cat09,
  cat10,
  cat11,
  cat12,
  cat13,
  cat14,
  cat15,
  cat16,
  cat17,
  cat18,
  cat19,
  cat20,
  cat21,
  cat22,
  cat23,
  cat24,
  cat25,
  cat26,
  cat27,
  cat28,
  cat29,
  cat30,
  cat31,
  cat32,
  cat33,
  cat34,
  cat35,
  cat36,
  cat37,
  cat38,
  cat39,
  cat40,
  cat41,
  cat42,
];

const removeByIndex = (array, index) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

export const getRandomCats = (numOfCats) => {
  const randomCats = [];
  let catsCopy = cats.map((cat, index) => {
    return {
      catId: index + 1,
      src: cat,
    };
  });
  while (randomCats.length !== numOfCats) {
    const randomIndex = Math.floor(Math.random() * catsCopy.length);
    const randomCat = catsCopy[randomIndex];
    randomCats.push(randomCat, randomCat);
    catsCopy = removeByIndex(catsCopy, randomIndex);
  }
  return shuffle(randomCats);
};
