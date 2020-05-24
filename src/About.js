import React from "react";
import styled from "styled-components";
import Content from "./Content";
import kotiki from "./cats/kotiki.png";
import rozhok from "./cats/rozhok.png";

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

const Rozhok = styled.img`
  width: 180px;
  height: 300px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 295px;
  right: 2vw;
  z-index: 1;
`;

const Kotiki = styled.img`
  width: 250px;
  height: 150px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 420px;
  left: 2vw;
  transform: rotate(-25deg);
  z-index: 1;
`;

const About = () => {
  return (
    <>
      <Content>
        <Greeting>Hi there!</Greeting>
        <TextBox>
          I won't lie to you - the real purpose to create this game was the
          ability to write "Creator of Catspotting" in my social media accounts'
          description. Sounds cool, huh? 😁
          <br />
          <br />
          Okay, now seriously:
          <br />
          <br />
          This is my first code project ever, so don't judge me too harshly.
          I've started learning React during quarantine 2020 and after I
          finished one video course I came up with the idea of Catspotting
          creation. The plan was simple: I have a long-standing addiction to
          memes and cats + now I'm trying to learn coding. Why not combine all
          these things together? Sounds like a lot of fun, however, the
          development process appeared to be much harder than I expected.
          Believe me, there was an entire ocean of tears and struggle. This game
          would never see the world without constant psychological support and
          wise guidance of @rip212. Thank you!
          <br />
          <br />
          If you have any ideas on how to improve Catspotting - don't hesitate
          to contact me. From my side, I promise that I will be improving this
          project as long as I can.
          <br />
          <br />
          Okay, now I'm done whining about this 😸
          <br />
          <br />
          Thanks to all who had enough patience to read this till the very end.
          Now go play Catspotting!
        </TextBox>
        <Rozhok src={rozhok} />
        <Kotiki src={kotiki} />
      </Content>
    </>
  );
};

export default About;
