import styled from "styled-components";
import React from "react";
import Rota from "./Rota";
function App() {
  return (
    <MainContainer>
      <Rota/>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin: 0px;
  //padding: 0px;
  //padding-bottom: 200px;
`;
