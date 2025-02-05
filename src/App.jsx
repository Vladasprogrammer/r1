import './app.scss';
import './button.scss';
import rand from './Functions/rand';
import Sq from './Components/046/Sq';
import { useState } from 'react';

export default function App() {
 
    const [sq, setSq] = useState([]);

    const add = _ => {
        setSq(s => [...s, rand()]);
    }

    return (
        <div className="App">
            <header className="App-header">
                
                <div className='sq-bin'>
                    {
                        sq.map((n, i) => <Sq key={i} num={n} />)
                    }
                </div>
                <button className='yellow' onClick={add}>Add</button>
            </header>
        </div>
    );
}