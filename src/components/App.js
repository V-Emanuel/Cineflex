import styled from "styled-components";
import React, { useState } from "react";
import Rota from "./Rota";
import Header from "./Header";
import Sections from "./Sections"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Rota />} />
          <Route path="/sessoes/:idFilme" element={<Sections/>} />
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
