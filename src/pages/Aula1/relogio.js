import React, { useEffect, useState } from 'react';
import './relogio.css';

function Clock() {
    let [hora, setHora] = useState('00');
    let [minuto, setMinuto] = useState('00');
    let [segundo, setSegundo] = useState('00');

    useEffect(() => {
        const relogio = setInterval(() => {
            const hoje = new Date();
            let h = hoje.getHours();
            let m = hoje.getMinutes();
            let s = hoje.getSeconds();

            setHora(h < 10 ? `0${h}` : h.toString());
            setMinuto(m < 10 ? `0${m}` : m.toString());
            setSegundo(s < 10 ? `0${s}` : s.toString());
        }, 1000);

        return () => clearInterval(relogio);
    }, []);

    return (
        <div className='container-relogio'>
            <div className="relogio">
                <div>
                    <span id="horas">{hora}</span>
                    <span className="tempo">Horas</span>
                </div>
                <div>
                    <span id="minutos">{minuto}</span>
                    <span className="tempo">Minutos</span>
                </div>
                <div>
                    <span id="segundos">{segundo}</span>
                    <span className="tempo">Segundos</span>
                </div>
            </div>
        </div>

    );
}

export default Clock;