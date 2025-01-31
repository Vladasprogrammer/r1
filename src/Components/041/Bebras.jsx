export default function Bebras() {

    let A = 10;

    const abc = _ => {
        return <h3>Labas</h3>
    }

    return (
        <>
            <h2>Bebras</h2>
            <span>Jam yra {A > 5 ? <span>Daug</span> : <span>Mažai</span>} metų</span>
            {abc()}
        </>
    )
}