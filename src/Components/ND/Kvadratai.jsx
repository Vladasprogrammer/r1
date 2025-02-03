import { useState } from 'react';

export default function Kvadratai() {
    
    const [square, setSquare] = useState([]);

    const addSquare = _ => {
        setSquare(squares => [...squares, {}]);
    };

    const squareStyle = {
        width: '25px',
        height: '25px',
        backgroundColor: 'dodgerBlue',
        margin: '10px',
        borderRadius: '5px'
    };

    return (
        <>
        <div style={{display: 'flex', flexWrap: 'wrap',}}>{square.map((_, index) => (
            <div key={index} style={squareStyle}></div>))}
        </div>
        <button className='green' onClick={addSquare}>Pridėti kvadrata</button>
        </>
    );
};