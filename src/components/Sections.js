import styled from "styled-components";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Sections() {

    const {idFilme} = useParams();
    const [section, setSection] = useState(undefined);
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        promise.then((ans) => {setSection(ans.data)})
    }, [])

    return (
        <>
            <Title>Selecione o Horário</Title>
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