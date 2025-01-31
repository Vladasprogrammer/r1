import rand from "../../Functions/rand";

export default function RandomNumber() {

    return (
        <div>
            <h2>{rand(100, 999)}</h2>
        </div>
    );
}