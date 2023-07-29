import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)

    

    return (
        <div className="counter">
            <div className="count">{count}</div>
            <button className="btn_count" onClick={() => setCount(count+1)}>+</button>
            <button className="btn_count" onClick={count>0 ? () => setCount(count-1): () => setCount(0)}>-</button>
            <br/>
            <button className="btn_count" onClick={() => setCount(0)}>Reset</button>
        </div>
        

    )
}

export default Counter