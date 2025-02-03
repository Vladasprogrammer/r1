import { useState } from 'react';

export default function AK() {

    const [isCircle, setIsCicle] = useState(true);

    const shape = _ => {
        setIsCicle(prevState => !prevState);
    };
    
    const shapeStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'paleVioletRed',
        marginBottom: '20px',
        borderRadius: isCircle ? '50%' : '0%',
    };

    return (
        <>
        <div style={shapeStyle}></div>
        <button onClick={shape}>Change</button>
        </>
    )
}