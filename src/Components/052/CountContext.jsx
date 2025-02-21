import { createContext, useState } from 'react';
 
const CountContext = createContext();
 
 
export const Count = ({ children }) => {
 
    const [count, setCount] = useState(33);
 
    const addOne = _ => {
        setCount(c => c + 1);
    }
 
    return (
        <CountContext.Provider value={{ count, addOne }}>
            {children}
        </CountContext.Provider>
    );
}
 
export default CountContext;
 