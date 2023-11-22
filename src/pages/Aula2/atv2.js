import React from "react"
import Contador from "./Contador"

import { Link } from "react-router-dom";

export default function Atv2() {
    return (
        <div>
            <Contador />
            <br />
            <Link to={"/"}>Voltar ao Menu</Link>
        </div>
    )
}
