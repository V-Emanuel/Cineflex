import styled from "styled-components";
import React from "react";
import Rota from "./Rota";
import Header from "./Header";
import Sections from "./Sections"
import Seats from "./Seats";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Rota />} />
          <Route path="/sessoes/:idFilme" element={<Sections/>} />
          <Route path="/assentos/:idSessao" element={<Seats/>}/>
        </Routes>
      </MainContainer>
    </BrowserRouter>

  );
}

export default App;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
