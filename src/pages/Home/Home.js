import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return(
        <div>
            <h1>Página Inicial</h1>
            <br/>
            <nav>
                <ul>
                    <li>
                        <Link to="/exercicio/atv1" >Atividade 1</Link>
                    </li>
                    <br/>
                    <li>
                        <Link to="/exercicio/atv2" >Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/exercicio/atv3" >Atividade 3</Link>
                    </li>
                    <li>
                        <Link to="/exercicio/atv4" >Atividade 4 - Calculadora</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
