import './app.css';
import './button.scss';
import Labas from './Components/ND/Labas';
import Props from './Components/ND/Props';
import ZB from './Components/ND/ZB';
import Props2 from './Components/ND/Props2';
import Props3 from './Components/ND/Props3';

export default function App() {

    return (
        <div className="App">
            <header className="App-header">

                <Labas />
                <Props t="Parašiau bet ką."/>
                <ZB spalva="1"/>
                <Props2 t1="Myliu Mamą" t2="Myliu Tėtį"/>
                <Props3 t1="Saulė" t2="Mėnulis" spalva="orange"/>
                
            </header>
        </div>
    )
}