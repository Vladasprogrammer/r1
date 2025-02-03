import { useState } from "react";

export default function MinusPlius() {

    const [number, setNumber] = useState(0);

    const minus = _ => {
        setNumber(c => c - 3)
    }

    const plus = _ => {
        setNumber(c => c + 1)
    }

    
    return (
        <>
        <div>{number}</div>
        <button onClick={minus}>- 3</button>
        <button onClick={plus}>+ 1</button>
        </>
    )
}