import { useContext } from "react"
import CountContext from "./CountContext";

export default function Button() {



    const { addOne } = useContext(CountContext);
    
    return (
        <button className="red" onClick={addOne}>Add 1</button>
    )
}