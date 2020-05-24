import styled from "styled-components";
import background from "./cats/background.jpg";

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

export default Content;
