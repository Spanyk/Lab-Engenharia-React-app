import { Link } from 'react-router-dom';
import Cards from './Cards';
import styled from "styled-components";


const Dashboad = styled.div`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: #fae19d;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    height: 800px;
    border-radius: 7px;
    padding:10px;

`


const GameTitle = styled.h1 `
text-align: center;
margin-bottom: 1em;
`



export default function Atv5() {
    return(
        <>
        <GameTitle>Jogo da Memoria</GameTitle>
         <Dashboad>
            <Cards />
        </Dashboad>
        <Link to={"/"}>Voltar ao Menu</Link>
        </>
          
    );
}