import React from 'react';
import Clock from './relogio';
import TypingEffect from './letreiro';
import { Link } from "react-router-dom";
import './relogio.css';


export default function Atv1() {
    return (
        <div>
            <TypingEffect />
            <Clock />
            <Link to={"/"}>Voltar ao Menu</Link>
        </div>
    )
}
