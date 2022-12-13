import styled from "styled-components";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function Sections({info, setInfo}) {

    const [selectedMovie, setSelectedMovie] = useState([]);
    const [section, setSection] = useState([]);
    const { idFilme } = useParams();
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        promise.then((ans) => { setSection(ans.data.days) })
        promise.then((ans) => setSelectedMovie(ans.data))
    }, [])

    return (
        <>
            <Title>Selecione o Horário</Title>
            <SectionContainer>
                {section.map((item) =>
                    <div data-test="movie-day"><Date>{item.weekday} - {item.date}</Date>
                        <Schedules>{item.showtimes.map(time =>
                            <Link key={item.id} to={`/assentos/${time.id}`}>
                                <Time data-test="showtime" onClick={() => setInfo({...info, date: item.date, hour: time.name})}>
                                    <p>{time.name}</p>
                                </Time>
                            </Link>)}
                        </Schedules></div>
                )}
            </SectionContainer>
            <Footer data-test="footer">
                <div><img data-test="footer" src={selectedMovie.posterURL}></img></div>
                <p data-test="footer" >{selectedMovie.title}</p>
            </Footer>
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
const SectionContainer = styled.div`
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
 margin-bottom: 20px;
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
        text-decoration: none;
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