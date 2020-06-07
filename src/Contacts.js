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

const ContactBox = styled.button`
  display: flex;
  justify-content: center;
  width: 100px;
  background: powderblue;
  margin: 15px;
  padding: 10px;
  border: 2px dashed black;
  font-size: 0.85rem;
  font-family: "Share Tech Mono", monospace;
  text-align: justify;
  user-select: none;
  cursor: pointer;
`;

const GeneralBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Contacts = () => {
  return (
    <Content>
      <Greeting>Get in touch</Greeting>
      <TextBox>
        If you have any ideas regarding how to improve Catspotting - don't
        hesitate to contact me 😸
      </TextBox>
      <GeneralBox>
        <ContactBox>Facebook</ContactBox>
        <ContactBox>Instagram</ContactBox>
        <ContactBox>Twitter</ContactBox>
      </GeneralBox>
    </Content>
  );
};

export default Contacts;
