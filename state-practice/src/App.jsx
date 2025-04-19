import React from "react"

export default function App() {
    let [count, setCount] = React.useState(0);

    function add () {
        setCount(count + 1)
    }

    function minus () {
        setCount(count - 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={minus} >–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={add} >+</button>
            </div>
        </main>
    )
}
