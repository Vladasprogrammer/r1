import './app.css';
import './button.scss';
import RandomNumber from './Components/042/RandomNumber';
import randColor from './Functions/randColor';
import rand from './Functions/rand';
// import Bebras from './Components/042/Bebras'
// import A from './Components/042/A';

// const stilius = { color: 'crimson' };

export default function App() {

  const goGreen = _ => {
    console.log('Go green');
  }
  
  const goBlue = nr => {
    console.log('Go blue!', nr)
  }

  const goRed = e => {
    console.log('Go red!', e.target);
  }

  const goYellow = (e, nr) => {
    console.log('Go Yellow!', nr, e.target);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ 
          color: randColor(),
          fontSize: rand(0, 1) ? '20px' : '60px',
          marginBottom: rand(1, 3) * 20 + 'px'
         }}>Random number:</h2>
        <RandomNumber />
        {/* <Bebras spalva="crimson" dydis={rand}/>
        <Bebras spalva="green" dydis={rand}/>
        <Bebras spalva="purple" dydis={rand}/>
        <A kasNors="Hello, Marsiečiai"/> */}
        <button className="green" onClick={goGreen}>Green</button>
        <button className="blue" onClick={_ => goBlue(1)}>Blue 1</button>
        <button className="blue" onClick={_ => goBlue(2)}>Blue 2</button>
        <button className="red" onClick={goRed}>Red</button>
        <button className="yellow" onClick={e => goYellow(e, 1)}>Yellow 2</button>
        <button className="yellow" onClick={e => goYellow(e, 2)}>Yellow 2</button>
      </header>
    </div>
  );
}

