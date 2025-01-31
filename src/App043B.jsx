import './app.css';
import './button.scss';
import A from './Components/043/A';
import { useState } from "react";
import B from './Components/043/B';
import C from './Components/043/C';

export default function App() {
    
    const [count1, setCount1] = useState(0);
    const [count2, setcount2] = useState(0);
    const [count3, setCount3] = useState(0);

    return (
        
        <div className="App">
            <header className="App-header">

            <A count1={count1}/>
            <button className="green" onClick={(_ => setCount1(c => c +1))}>+ 1</button>
            <B count2={count2}/>
            <button className="blue" onClick={(_ => setcount2(c => c + 1))}>+ 1</button>

            <h2>Count: {count3}</h2>
            <C setCount3={setCount3}/>
            </header>
        </div>
    )
}
        