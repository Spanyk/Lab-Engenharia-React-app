import "./buttons.css";

function Button({ value, onChange}) {


    const incrementCount = () => {
        onChange(value + 1); 
       
    }

    const decrementCount = () => {
        onChange(value - 1);
    }

    return(
        <div>
            <button className="button" onClick={ incrementCount }>+</button>
            <button  className="button" onClick={ decrementCount }>-</button>
        </div>
    );

}

export default Button;
