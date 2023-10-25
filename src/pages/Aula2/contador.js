import { useState, React } from "react";

import avatarMasculino from './avatar-homen.jpg';
import avatarFeminino from './avatar-mulher.jpg';

import Button from './Button';
import './contador.css'; 

export default function Contador() {
 
    const [total, setTotal] = useState(0);
    const [totalHomem, setHomen] = useState(0); 
    const [totalMulher, setMulher] = useState(0);

    if (total > 0) {
        setTotal = totalHomem + totalMulher; 
    }

    return(
        <div className="contador">
            <h1>Total </h1>
            <span className="value">{total}</span>
            <div className="pessoas">
                <div className="pessoas-contador">
                    <img className="avatar" src={ avatarMasculino } />
                    <Button className="button"/>
                    <label>Homens</label>
                    <span className="value">{totalHomem}</span>
                </div>
                <div className="pessoas-contador">
                    <img className="avatar" src={ avatarFeminino } />
                    <Button className="button" />
                    <label>Mulheres</label> 
                    <span className="value">{totalMulher}</span>
                </div>
            </div>
        </div>
    );
}


