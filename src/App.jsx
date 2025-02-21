import './app.scss';
import './buttons.scss';
import useCount from './Hooks/useCount';

export default function App() {

    const [ numeris, prideti1, atimti1 ] = useCount(0);
    const [ value, add1, reset ] = useLocal(0);
      
    return (
        <div className="App">
            <header className="App-header">
                <h2>Count: {numeris}</h2>
                <div className="buttons">
                    <button className='blue' onClick={prideti1}>Add 1</button>
                    <button className='red' onClick={atimti1}>Red 1</button>
                </div>
                <h2>Local Value: {value}</h2>
                <div className="buttons">
                    <button className="blue" onClick={add1}>Add 1</button>
                    <button className="red" onClick={reset}>Reset</button>
                </div>
 
            </header>
        </div>
    );
}
