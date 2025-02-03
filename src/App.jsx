import './app.css';
import './button.scss';
import AK from "./Components/ND/AK";
import CRandom from './Components/ND/CRandom';
import MinusPlius from './Components/ND/MinusPlus';
import Kvadratai from './Components/ND/Kvadratai';
import RedBlue from './Components/ND/RedBlue';


export default function App() {

    return (
        <div className="App">
            <header className="App-header">

                <AK />
                <CRandom />
                <MinusPlius />
                <Kvadratai />
                <RedBlue />

            </header>
        </div>
    )
}