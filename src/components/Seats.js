import styled from "styled-components";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Seats({ info, setInfo }) {

    const { idSessao } = useParams();
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [day, setDay] = useState([]);
    const [seat, setSeat] = useState([]);
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [chair, setChair] = useState([])
    const [id, setId] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then((ans) => setSelectedMovie(ans.data.movie))
        promise.then((ans) => setDay(ans.data.day))
        promise.then((ans) => setSeat(ans.data.seats))
    }, [])

    function Verify(name, isAvailable, idSeat) {
        const clicado = chair.includes(name)
        if (!clicado && isAvailable) {
            setChair([...chair, name])
            setId([...id, idSeat])
        } else {
            setChair(chair.filter(a => a !== name))
            setId(id.filter(a => a !== idSeat))
        }

        if (isAvailable === false) {
            alert("Esse assento não está disponível")
        }
    }
    function ChangePage() {
        if (chair.length !== 0 && name !== "" && cpf !== "") {
            setInfo({ ...info, assento: chair, id: id, nome: name, cpf: cpf })
            navigate("/sucesso");
        }
    }
    function Data() {
		const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
			ids: info.id,
            name: name,
			cpf: cpf
		});
    }
    return (
        <Body>
            <Title>Selecione o(s) assento(s)</Title>
            <Assentos>{seat.map((item) =>
                <div
                    key={item.id}
                    data-test="seat"
                    className={chair.includes(item.name) && item.isAvailable ? "selected" : item.isAvailable ? "available" : "unavailable"}
                    onClick={() => Verify(item.name, item.isAvailable, item.id)}>
                    {item.name}
                </div>
            )}
            </Assentos>
            <Options>
                <div><Selected></Selected><p>Selecionado</p></div>
                <div><Available></Available><p>Disponível</p></div>
                <div><Unavailable></Unavailable><p>Indisponível</p></div>
            </Options>
            <Inputs>
                <p>Nome do Comprador</p>
                <form onSubmit={Data}>
                    <input type="text" value={name} placeholder="Digite seu nome..." onChange={e => setName(e.target.value)}></input>
                    <p>CPF do Comprador</p>
                    <input type="number" value={cpf} placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)}></input>
                </form>
            </Inputs>
            <Reserve onClick={ChangePage}><p>Reservar assento(s)</p></Reserve>
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
    div{
        width: 26px;
        height: 26px;
        border: 1px solid #808F9D;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
        margin-bottom: 10px;
        &:hover{
            cursor: pointer;
        }
    }
    .available{
        background: #C3CFD9;
    }
    .unavailable{
        background: #FBE192;
    }
    .selected{
        background:  #1AAE9E;
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
    &:hover{
            cursor: pointer;
        }
`;