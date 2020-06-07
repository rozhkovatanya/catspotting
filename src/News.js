import React from "react";
import styled from "styled-components";
import Content from "./Content";

const Greeting = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  user-select: none;
  font-family: "Bangers", cursive;
  font-size: 2.5rem;
  color: powderblue;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  position: relative;
  top: 23px;
  left: 145px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  background: #ffdf3b;
  border-radius: 15px;
  padding: 25px;
  border: 2px dashed black;
  font-size: 0.85rem;
  font-family: "Share Tech Mono", monospace;
  text-align: justify;
`;

const News = () => {
  return (
    <>
      <Content>
        <Greeting>Oh no!</Greeting>
        <TextBox>
          It looks like here's no news yet. No worries - this page will be
          updated soon.
        </TextBox>
      </Content>
    </>
  );
};

export default News;
