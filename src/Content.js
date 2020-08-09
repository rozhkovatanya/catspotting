import styled from "styled-components";

const Content = styled.main`
  width: 100%;
  min-height: calc(100vh - 79px - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Asap Condensed", sans-serif;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem;
  padding-bottom: 0;

  @media (max-width: 1000px) {
    min-height: calc(100vh - 180px - 56px);
  }

  @media (max-width: 605px) {
    min-height: calc(100vh - 203px - 56px);
  }

  @media (max-width: 575px) {
    min-height: calc(100vh - 203px - 69px);
  }

  @media (max-width: 545px) {
    min-height: calc(100vh - 157px - 69px);
  }

  @media (max-width: 335px) {
    min-height: calc(100vh - 180px - 69px);
  }
`;

export default Content;
