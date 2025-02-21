import './app.scss';
import './buttons.scss';
import A from './Components/052/A';
import { useState } from 'react';
import Context123 from './Components/052/Context';
import ContextABC from './Components/052/ContextABC';
import { Count } from './Components/052/CountContext';

export default function App() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [text, setText] = useState('Hi');

    return (
        <Count>
            <Context123.Provider value={{ count2 }}>
                <ContextABC.Provider value={{ text }}>
                    <div className="App">
                        <header className="App-header">
                            <A count1={count1} />
                            <div>
                                <button className="yellow" onClick={_ => setCount1(count1 + 1)}>Count1:</button>
                                <button className="green" onClick={_ => setCount2(count2 + 1)}>Count2:</button>
                                <button className="blue" onClick={_ => setText('Hi!')}>Text:</button>
                            </div>

                        </header>
                    </div>
                </ContextABC.Provider>
            </Context123.Provider>
        </Count>
    );
}
