import { useContext } from "react";
import Context123 from "./Context";
import ContextABC from "./ContextABC";
import CountContext from "./CountContext";

export default function C({ count1 }) {

    const { count2 } = useContext(Context123);
    const { text } = useContext(ContextABC);
    const { count } = useContext(CountContext);

    return (

        <div className="com">
            <h2>C</h2>
            <p>Count1: {count1}</p>
            <p>Count2: {count2}</p>
            <p style={{color: 'crimson'}}> Count: {count}</p>
            <p>Text: {text}</p>
        </div>
    );
}