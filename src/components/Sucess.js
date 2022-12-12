import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export default function Sucess({ info }) {

    return (
        <Body>
            <Title>Pedido feito com sucesso!</Title>
            <Informations>
                <div data-test="movie-info">
                    <h1>Filme e sessão</h1>
                    <h2>{info.movie}</h2>
                    <h2>{info.date} - {info.hour}</h2>
                </div>
                <div data-test="seats-info">
                    <h1>Ingressos</h1>
                    <>{info.assento.map((item) => <h2>Assento: {item}</h2>)} </>
                </div>
                <div data-test="client-info">
                    <h1>Comprador</h1>
                    <h2>Nome: {info.nome}</h2>
                    <h2>CPF: {info.cpf}</h2>
                </div>
            </Informations>
            <Link to="/"><BackHome data-test="go-home-btn">
                <p>Voltar para Home</p>
            </BackHome></Link>
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
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #247A6B;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Informations = styled.div`
    width: 90%;
    margin-bottom: 20px;
    div{
        margin-bottom: 25px;
    }
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        margin-bottom: 10px;
    }
    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #293845;
    }
`;
const BackHome = styled.div`
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
    text-decoration: none;
    }
`;