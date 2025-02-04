import './app.scss';
import './button.scss';
import { useState } from 'react';
import rand from './Functions/rand';
import { v4 as uuidv4 } from 'uuid';
import randColor from './Functions/randColor'
import Sq from './Components/044/Sq';


export default function App() {

    const [sq, setSq] = useState([])

    const addSq = _ => {
        setSq(prev => [...prev, {
            digit: rand(1000, 9999),
            id: uuidv4(),
            color: randColor(),
            show: true,
            row: prev.length
        }]);
    }

    const reset = _ => setSq([]);

    const add20Sq = _ => {
        let arr = [];
        for (let i = 0; i < 20; i++) {
            arr.push({
                digit: rand(1000, 9999),
                id: uuidv4(),
                color: randColor(),
                show: true,
                row: sq.length + i
            });
        }
        setSq(prev => [...prev, ...arr]);
    }

    const sortByDigits = _ => {
        setSq(prev => prev.toSorted((a, b) => a.digit - b.digit));
    }

    const filterMore5000 = _ => {
        setSq(prev => prev.map(s => ({ ...s, show: s.digit > 5000 })));
    }

    const showAll = _ => {
        setSq(prev => prev.map(s => ({ ...s, show: true })));
    }

    const sortDefault = _ => {
        setSq(prev => prev.toSorted((a, b) => a.row - b.row));
    }

    const removeSq = id => {
        setSq(prev => prev.filter(s => s.id !== id));
    }

    const toggleRotate = id => {
        setSq(prev => prev.map(s => {
            if (s.id !== id) {
                return s;
            }
            if (s.rotate) {
                delete s.rotate;
            } else {
                s.rotate = true;
            }
            return s;
        }));
    }
    
    const rotateAll = _ => {
        sq.forEach(s => {
            setTimeout(_ => {
                setSq(prev => prev.map(sq => {
                    if (sq.id !== s.id) {
                        return sq;
                    }
                    s.rotate = true;
                    return sq;
                }))
            }, rand(0, 5000));
        });
    }

    return (
        <div className="App">
            <header className="App-header">

                <div className='sq-bin'>
                    {
                        sq.map(s => s.show ? <Sq key={s.id} sq={s} removeSq={removeSq} toggleRotate={toggleRotate}/> : null)
                    }
                </div>
                <div className='sq-bin'>
                    <button className='green' onClick={addSq}>Add</button>
                    <button className='red' onClick={reset}>Reset</button>
                    <button className='yellow' onClick={add20Sq}>Add 20</button>
                    <button className='blue' onClick={sortByDigits}>Sort Digits</button>
                    <button className='blue' onClick={filterMore5000}>Show 5000</button>
                    <button className='green' onClick={showAll}>Show all</button>
                    <button className='yellow' onClick={sortDefault}>Show default</button>
                    <button className='blue' onClick={rotateAll}>Rotate all</button>
                </div>
            </header>
        </div>
    );
}