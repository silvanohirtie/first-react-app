import React, { useState } from 'react'
export default function CounterExample(){
const [count,setCount] = useState(0)

    return(
        <div className="text-center">
        <h1 className="text-3xl">Counter: {count}</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setCount(count-1)}> - </button>
        &nbsp;
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setCount(count+1)}>
        +
        </button>
        </div>
    )

}