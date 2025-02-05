import { useEffect } from "react";

export default function Sq({ num }) {

    useEffect(_ => {
        console.log('Naujas kvadratukas');
        return _ => {
            console.log('Kvadratukas sunaikintas');
        }
    }, []);
    
    return (
        <div className="sq">
            {num}
        </div>
    );
}
 