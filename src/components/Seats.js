import styled from "styled-components";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function Seats(){
    
    return (
        <>
            <Title>Selecione o(s) assento(s)</Title>
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