import styled from "styled-components";
import{React, useState} from "react";
import Rota from "./Rota";
import Header from "./Header";
import Sections from "./Sections"
import Seats from "./Seats";
import Sucess from "./Sucess";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  const [info, setInfo] = useState("");

  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Rota info={info} setInfo={setInfo}/>} />
          <Route path="/sessoes/:idFilme" element={<Sections info={info} setInfo={setInfo}/>} />
          <Route path="/assentos/:idSessao" element={<Seats info={info} setInfo={setInfo}/>}/>
          <Route path="/sucesso" element={<Sucess info={info}/>}/>
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
