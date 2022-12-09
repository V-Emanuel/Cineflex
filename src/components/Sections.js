import styled from "styled-components";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Sections() {

    const { idFilme } = useParams();
    const [section, setSection] = useState([]);
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        promise.then((ans) => { setSection(ans.data.days) })
        

    }, [])

    return (
        <>
            <Title>Selecione o Horário</Title>
            <MainContainer>
                {section.map((item) => 
                     <><Date>{item.weekday} - {item.date}</Date>
                     <Schedules>{item.showtimes.map( time => <Time><p>{time.nome}</p></Time>)}</Schedules></>
                )}
         </MainContainer>
        </>
    );
}

const Title = styled.p`
    height: 60px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #293845;
`;

const MainContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
margin-left: 8%;
`;

const Date = styled.p`
    height: 60px;
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    color: #293845;
`;

const Schedules = styled.div`
 display: flex;
 width: 100%;
`;

const Time = styled.div`
    width: 83px;
    height: 43px;
    left: 114px;
    top: 227px;
    background: #E8833A;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    }
`;