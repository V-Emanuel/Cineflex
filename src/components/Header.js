import styled from "styled-components";
 
export default function Header(){
    return (
        <>
        <Topo><h1>CINEFLEX</h1></Topo>
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