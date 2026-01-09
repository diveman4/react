import {useState} from "react"

type CounterProps = {
    initialValue: number
}

//Counetコンポーネントを定義
const Counter = (props:CounterProps) => {
    const {initialValue} = props
    //useStateの戻り値は配列
    const [count, setCount] = useState(initialValue)

    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count-1)}>-</button>
            <button onClick={() => setCount((prevCount)=>prevCount+1)}>+</button>
        </div>
    )
}

export default Counter