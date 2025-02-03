import { useState } from "react";

export default function RedBlue() {

    const [squares, setSquares] = useState([]);
    const addRedSquare = _ => {
        setSquares([...squares, { color: 'red'}]);
    };
    const addBlueSquare = _ => {
        setSquares([...squares, { color: 'blue'}]);
    };
    const resetSquares = _ => {
        setSquares([]);
    }
    const squareStyle = (color) => ({
        width: '25px',
        height: '25px',
        backgroundColor: color,
        margin: '10px'
    });
    return (
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            {squares.map((square, index) => (
                <div key={index} style={squareStyle(square.color)}></div>
            ))}
        </div>
        <button className='red' onClick={addRedSquare}>Red</button>
        <button className='blue' onClick={addBlueSquare}>Blue</button>
        <button className='yellow' onClick={resetSquares}>Reset</button>
        </>
    )
}