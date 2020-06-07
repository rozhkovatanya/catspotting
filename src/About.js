import React from "react";
import styled from "styled-components";
import Content from "./Content";
import kotiki from "./cats/kotiki.png";
import rozhok from "./cats/rozhok.png";
import { Flex } from "reflexbox/styled-components";

const Greeting = styled.header`
  user-select: none;
  font-family: "Bangers", cursive;
  font-size: 2.5rem;
  color: powderblue;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  position: relative;
  text-align: end;
  top: 20px;

  @media (max-width: 540px) {
    text-align: center;
  }
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  max-width: 500px;
  background: #ffdf3b;
  border-radius: 16px;
  padding: 26px;
  border: 2px dashed black;
  font-size: 1rem;
  text-align: justify;
`;

const ImagesBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  width: 95vw;
  bottom: 0;
  @media (max-width: 375px) {
    position: static;
  }
`;

const Rozhok = styled.img`
  display: block;

  @media (max-width: 1670px) {
    width: 180px;
    height: 300px;
  }

  @media (max-width: 770px) {
    width: 90px;
    height: 150px;
  }
`;

const Kotiki = styled.img`
  position: relative;
  bottom: 50px;
  display: block;
  transform: rotate(-20deg);

  @media (max-width: 1670px) {
    width: 250px;
    height: 150px;
  }

  @media (max-width: 770px) {
    width: 125px;
    height: 75px;
  }
`;

const About = () => {
  return (
    <Content>
      <div>
        <Greeting>Hi there!</Greeting>
        <TextBox>
          I won't lie to you - the real purpose of creating this game was the
          ability to add "Creator of Catspotting" to my social media accounts'
          description. Sounds cool, huh? 😁
          <br />
          <br />
          Okay, now seriously:
          <br />
          <br />
          This is my first code project ever, so don't judge me too harshly.
          I've started learning React during the quarantine 2020. After I
          finished one video course I came up with the idea of Catspotting
          creation. The plan was simple: I have a long-standing addiction to
          memes and cats + now I'm trying to learn coding. How about combining
          these things together? It sounds like a lot of fun, however, the
          development process appeared to be much harder than I expected.
          Believe me, there was an entire ocean of tears and struggle. This game
          would never see this world without constant psychological support and
          wise guidance of @rip212. Thank you!
          <br />
          <br />
          If you have any ideas regarding how to improve Catspotting - don't
          hesitate to contact me. From my side, I promise that I will be
          improving this project as I learn and develop.
          <br />
          <br />
          Thanks to all who had enough patience to read this till the very end.
          Now go play Catspotting! 😸
        </TextBox>
      </div>
      <ImagesBox>
        <Kotiki src={kotiki} />
        <Rozhok src={rozhok} />
      </ImagesBox>
    </Content>
  );
};

export default About;
