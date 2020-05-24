import React from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import front from "./cats/front.png";

const CatBox = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: contain;
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${front});
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

export default Cat;
