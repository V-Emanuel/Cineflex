import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Rota({info, setInfo}) {
    const [movies, setMovies] = useState([]);
    //
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then(answer => { (setMovies(answer.data)) })
    }, [])

    return (
        <>
            <MoviesList>
                <p>Selecione o filme</p>
                <div>
                    {movies.map(item => <Link key={item.id} to={`/sessoes/${item.id}`}>
                        <ContainerMovie onClick={() => setInfo({...info, movie: item.title})}><img src={item.posterURL}></img></ContainerMovie>
                    </Link>)}
                </div>
            </MoviesList>
            
        </>
    );
}

const MoviesList = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
p{
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