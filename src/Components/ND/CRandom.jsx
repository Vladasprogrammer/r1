import { useState } from 'react';
import getRandomInt from '../../Functions/rand';

export default function CRandom() {

    const [isCircle, setIsCircle] = useState(true);
    const [number, setNumber] = useState(5);


    const shape = _ => setIsCircle(prev => !prev);

    const shapeStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: isCircle ? "Violet" : "fireBrick",
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: isCircle ? '50%' : '5px',
    };

    const rand = _ => {
        setNumber(getRandomInt(5, 25));
    };

    return (
        <>
            <div style={shapeStyle}>{number}</div>
            <button onClick={shape}>Pakeisti</button>
            <button onClick={rand}>Atsitiktinis skaičius</button>
        </>
    )
}