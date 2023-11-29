import { useState } from "react";
import Card from "./Card";
import styled from "styled-components";

const Container = styled.div`
    height: 700px;
    width: 700px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1em;
`

export default function Cards() {

    const [items, setItems] = useState([
        { id: 1, img: '/img/clayfable.png', status: "" },
        { id: 1, img: '/img/clayfable.png', status: "" },
        { id: 2, img: '/img/bulbasaur.png', status: "" },
        { id: 2, img: '/img/bulbasaur.png', status: "" },
        { id: 3, img: '/img/cartepie.png', status: "" },
        { id: 3, img: '/img/cartepie.png', status: "" },
        { id: 4, img: '/img/charlizad.png', status: "" },
        { id: 4, img: '/img/charlizad.png', status: "" },
        { id: 5, img: '/img/digtrio.png', status: "" },
        { id: 5, img: '/img/digtrio.png', status: "" },
        { id: 6, img: '/img/meowth.png', status: "" },
        { id: 6, img: '/img/meowth.png', status: "" },
        { id: 7, img: '/img/pigeotte.png', status: "" },
        { id: 7, img: '/img/pigeotte.png', status: "" },
        { id: 8, img: '/img/pikachu.png', status: "" },
        { id: 8, img: '/img/pikachu.png', status: "" }
    ].sort(() => Math.random() - 0.5));

    const [prev, setPrev] = useState(-1)

    function check(current) {
        if(items[current].id == items[prev].id) {
            items[current].status = "correct";
            items[prev].status = "correct"
            setPrev(-1);
        } else {
            items[current].status = "wrong";
            items[prev].status = "wrong";
            setItems([...items]);
            setTimeout(() => {
                items[current].status = "";
                items[prev].status = "";
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id) {
        if(prev === -1) {
            items[id].status = "active";
            setItems([...items]);
            setPrev(id)
        } else {
            check(id)
        }
    }

    return(
        <Container>
        { items.map((item, index) => (
                <Card key={ index } item={ item } id={ index } handleClick={ handleClick }/>
            ))}
        </Container>
       
        
     );
}