import { useState } from "react";


export default function Checkbox() {


    const [check, setCheck] = useState(false);
    
    const handleMyBox = _ => {
        setCheck(c => !c);
    }
    return (
        <fieldset>
            <legend>Checkbox</legend>
                <div>
                    <label htmlFor="rules1">Sutinki su taisyklemis</label>
                    <input id="rules1" type="checkbox" checked={check} onChange={handleMyBox}/>
                </div>
        </fieldset>

    );
}