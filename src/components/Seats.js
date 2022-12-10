import styled from "styled-components";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function Seats() {

    const { idSessao } = useParams();
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [day, setDay] = useState([]);
    const [seat, setSeat] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then((ans) => setSelectedMovie(ans.data.movie))
        promise.then((ans) => setDay(ans.data.day))
        promise.then((ans) => setSeat(ans.data.seats))
    }, [])

    return (
        <Body>
            <Title>Selecione o(s) assento(s)</Title>
            <Assentos>{seat.map((item) => <Seat>{item.name}</Seat>)}</Assentos>
            <Options>
                <div><Selected></Selected><p>Selecionado</p></div>
                <div><Available></Available><p>Disponível</p></div>
                <div><Unavailable></Unavailable><p>Indisponível</p></div>
            </Options>
            <Inputs>
            <p>Nome do Comprador</p>
            <input placeholder="Digite seu nome..."></input>
            <p>CPF do Comprador</p>
            <input placeholder="Digite seu CPF..."></input>
            </Inputs>
            <Reserve><p>Reservar assento(s)</p></Reserve>
            <Footer>
                <div><img src={selectedMovie.posterURL}></img></div>
                <span><p>{selectedMovie.title}</p>
                    <p>{day.weekday} - {day.date}</p></span>
            </Footer>
        </Body>
    );
}
const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;
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
const Assentos = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;
const Seat = styled.div`
    width: 26px;
    height: 26px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-bottom: 10px;
    
`;
const Footer = styled.footer`
    width: 100%;
    height: 117px;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    padding-left: 40px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    div{
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    }
    img{
        width: 48px;
        height: 72px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }
`;
const Options = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;
            color: #4E5A65;
        }
    }
`;
const Selected = styled.div`
    width: 26px;
    height: 26px;
    background-color: #1AAE9E;
    border: 1px solid #808F9D;
    border-radius: 12px;
`;
const Available = styled.div`
    width: 26px;
    height: 26px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
`;
const Unavailable = styled.div`
    width: 26px;
    height: 26px;
    background-color: #FBE192;
    border: 1px solid #808F9D;
    border-radius: 12px;
`;
const Inputs = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 50px;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
        margin-bottom: 5px;
    }
    input{
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    input::placeholder{
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #AFAFAF;
        padding-left: 10px;
        box-sizing: border-box;
    }
`;

const Reserve = styled.div`
    width: 225px;
    height: 42px;
    border-radius: 3px;
    background: #E8833A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    p{

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    }
`;