import './app.css';
import './button.scss';
import randColor from './Functions/randColor';
import { useRef, useState } from 'react';

export default function App() {

    const h1Elem = useRef();
    // let h1Color = 'crimson';

    const showH1 = _ => {
        console.log(h1Elem.current);
    }

    const [h1Color, setH1Color] = useState('crimson');
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState({
        digit: 0,
        color: 'crimson'
    });
    
    const h1ChangeColorBad = _ => {
        h1Elem.current.style.color = randColor();
    }

    const h1ChangeColor = _ => {
        // h1Color - randColor(); // tiesioginis steito keitimas - blogai, jus nuteisiames susaudymu vietoje

        setH1Color(randColor());
    }

    const add1 = _ => {
        // count = count + 1; // tiesioginis steito keitimas - blogai, jus nuteisiames susaudymu vietoje
        // setCount(count + 1); // irgi negerai
        setCount(c => c + 1); // O daabar gerai...
    }

    const add2 = _ => {
        setCount2(sk => ({
            digit: sk.digit + 2,
            color: randColor()
        }));
    }

    return (
        <div className="App">
            <header className="App-header">

                <h2 style={{color: count2.color}}>Count: {count2.digit}</h2>

                <h2>Count: {count}</h2>                

                <button onClick={add2}>+ 2</button>

                <button onClick={add1}>+ 1</button>
            
                <button onClick={showH1}>Show h1</button>

                <button onClick={h1ChangeColorBad}>Change h1 color bad</button>

                <button onClick={h1ChangeColor}>Change h1 color Good</button>
            
                <h1 ref={h1Elem} style={{
                    color: h1Color
                }}>My React App</h1>
            </header>    
        </div>
    )
}