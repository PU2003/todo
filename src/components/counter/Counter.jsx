import React ,{ useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';

export default function Counter(){

    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by){
         setCount(count + by)
    }

    function decrementParentFunction(by){
        setCount(count - by)
    }

    function resetCounter(){
        setCount(0)
    }

    return(

        <div>
            <span className="totalCount">{count}</span>

            <CounterButton by={1} 
            incrementMethod = {incrementCounterParentFunction} 
            decrementMethod = {decrementParentFunction}/>

            <CounterButton by={2} 
            incrementMethod = {incrementCounterParentFunction} 
            decrementMethod = {decrementParentFunction}/>

            <CounterButton by={5} 
            incrementMethod = {incrementCounterParentFunction} 
            decrementMethod = {decrementParentFunction}/> 

            <button className='reset'
                    onClick={resetCounter}
                    >Reset</button>

        </div>    

    )
}


