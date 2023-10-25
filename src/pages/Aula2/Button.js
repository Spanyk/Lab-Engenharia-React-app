import React from "react";

import { useState } from "react";


const Button = () => {
    const [count, setCount] = useState(0);

    const Plus = () => {
        setCount(count + 1);
    }

    const Minus = () => {
        setCount(count - 1); 
    }


    return(
        <div>
            <button className="button" type="button" onClick={Plus}>+</button>
            <button className="button" type="button" onClick={Minus}>-</button>
        </div>
    );
}

export default Button;