import { useState, React } from "react";

import avatarMasculino from './avatar-homen.jpg';
import avatarFeminino from './avatar-mulher.jpg';
import btnRefresh from "./refresh-button.png";

import Button from './Button';
import './contador.css'; 

export default function Contador() {
    
    const [total, setTotal ] = useState(0);
    const [homens, setHomens ] = useState(0);
    const [mulheres, setMulheres ] = useState(0);

    
    const handleHomensChange = (value) => {
        if(value < 0) {
            value = 0;
        }
        setHomens(value);
        setTotal(value + mulheres);
      };
    
      const handleMulheresChange = (value) => {
        if(value < 0) {
            value = 0;
        }
        setMulheres(value);
        setTotal(value + homens);
      };

    const reset = () => {
        setHomens(0);
        setMulheres(0);
        setTotal(0);
    }    
    return(
        <div className="contador">
            <h1>Total</h1>
            <button onClick={reset} id="reset">
                <img src={ btnRefresh }/>
            </button>
            <span id="total" className="value">{ total }</span>
            <div className="pessoas">
                <div className="pessoas-contador">
                    <img className="avatar" src={ avatarMasculino } />
                    <Button  value={ homens } onChange={ handleHomensChange } />
                    <label>Homens</label>
                    <span className="value">{ homens }</span>
                </div>
                <div className="pessoas-contador">
                    <img className="avatar" src={ avatarFeminino } />
                    <Button  value={ parseInt(mulheres) } onChange={ handleMulheresChange }  />
                    <label>Mulheres</label> 
                    <span className="value">{mulheres}</span>
                </div>
            </div>
        </div>
    );
}


