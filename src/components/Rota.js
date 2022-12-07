import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { urlMovies } from "../constants/API";

export default function Rota() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get(urlMovies)
        promise.then(answer => { setMovies(answer.posterURL.movies) })
    }, [])

    return (
        <>
            <Topo><h1>CINEFLEX</h1></Topo>
            <MoviesList>
                    {movies.map(item => <img src={item}></img>)}
            </MoviesList>
        </>
    );
}

const Topo = styled.div`
    background-color: #C3CFD9;
    width: 100vw;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
}

`;
const MoviesList = styled.div`
width: 100vw;
height: 100%;
display: flex;
`;