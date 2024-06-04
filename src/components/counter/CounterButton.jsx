import React from "react"

export default function CounterButton({by,incrementMethod,decrementMethod}){
    
    // [0,f] -> we're getting 0 and function in return
    //const [count, setCount] = useState(0); 

    // function incrementCounterFunction(){
         
    //      incrementMethod(by)                            we want to call incrementMethod directly on onClick, for this we will be using
    // }                                                     arrow functions.
                                                         

    return(
        
        <div className="Counter">

            <div>
                <button className="counterButton" 
                        onClick={() => incrementMethod(by)}
                
                >+{by}</button>

                <button className='decrcount' 
                        onClick={() => decrementMethod(by)}

                >-{by}</button>

            </div>
    
        </div>       
        
        
    )
}