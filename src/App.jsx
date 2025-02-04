import './app.scss';
import './button.scss';
import Text from './Components/045/Text';
import TextX3 from './Components/045/TextX3';
// import Task from './Components/045/Task';
import Select from './Components/045/Select';
import Checkbox from './Components/045/CheckBox';
import CheckboxX4 from './Components/045/CheckboxX4';
import RadioX4 from './Components/045/RadioX4';
 
export default function App() {
 

    return (
        <div className="App">
            <header className="App-header">
                {/* <Task />  */}

                <RadioX4 />

                <CheckboxX4 />
                <Checkbox />
                
                <Select />
                <TextX3 />
                <Text />
            </header>
        </div>
    );
}
 