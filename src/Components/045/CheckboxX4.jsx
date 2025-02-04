import { useState } from "react";

export default function CheckboxX4() {

    const cbc = (
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1" viewBox="0 0 32 32">
            <clipPath id="_clip1">
                <path clipRule="evenodd" d="m0 0h32v32h-32z" />
            </clipPath>
            <g fill="none">
                <path id="Checkbox-checked" d="m0 0h32v32h-32z" />
                <g clipPath="url(#_clip1)">
                    <path d="m0 0h32v32h-32z" />
                    <g stroke="#228B22" strokeWidth="2">
                        <path d="m28 16c0 11.944-.069 12-12 12s-12-.036-12-12 .023-12 12-12h4.5" />
                        <path d="m29 6-14 14-6-6" />
                    </g>
                </g>
            </g>
        </svg>
    );
    const cbu = (
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1" viewBox="0 0 32 32">
            <clipPath id="_clip1">
                <path clipRule="evenodd" d="m0 0h32v32h-32z" />
            </clipPath>
            <g fill="none">
                <path id="Checkbox-checked" d="m0 0h32v32h-32z" />
                <g clipPath="url(#_clip1)">
                    <path d="m0 0h32v32h-32z" />
                    <g stroke="#228B22" strokeWidth="2">
                        <path d="m28 16c0 11.944-.069 12-12 12s-12-.036-12-12 .023-12 12-12h4.5" />
                    </g>
                </g>
            </g>
        </svg>
    );

    const [check, setCheck] = useState([false, false, false, false]);

    const cbData = [
        'I have a bike',
        'I have a car',
        'I have a boat',
        'I have a plane'
    ];

    const handleMyBox = i => {
        setCheck(c => c.map((v, j) => i === j ? !v : v));
    }

    return (
        <fieldset>
            <legend>4 X Checkbox</legend>

            {cbData.map((cb, i) => (
                <div className="checkbox" key={i}>
                    <input type="checkbox" id={`vehicle${i}`} onChange={_ => handleMyBox(i)}/>
                    <label htmlFor={`vehicle${i}`}>{check[i] ? cbc : cbu}<span>{cb}</span></label>
                </div>
            ))}


        </fieldset>
    );
}
