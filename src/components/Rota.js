import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { urlMovies } from "../constants/API";

export default function Rota() {
    const [movies, setMovies] = useState([]);
    //
    useEffect(() => {
        const promise = axios.get(urlMovies)
        promise.then(answer => { (setMovies(answer.data)) })
    }, [])

    return (
        <>
            <Topo><h1>CINEFLEX</h1></Topo>
            <MoviesList>
                <p>Selecione o filme</p>
                <div>
                {movies.map(item => <ContainerMovie><img src={item.posterURL}></img></ContainerMovie>)}
                </div>
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
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
p{
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
    background-color: red;
}
div{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    }
img{
    width: 129px;
}
`;
const ContainerMovie = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 15px 15px 15px;
`;