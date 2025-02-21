import { useContext } from 'react';
import C from './C';
import Context123 from './Context';
import Button from './Button';

export default function B({ count1 }) {

    const { count2 } = useContext(Context123);
    
    return (
        <div className="com">
            <h2>B</h2>
            <p>Count2: {count2}</p>
            <C count1={count1}/>
            <Button />
        </div>
    );
}