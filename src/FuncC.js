import React from "react"



export default function FuncC(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <button onClick={()=>props.getFunc({name : props.name})}>click me</button>
            <ul>
                
                <li>{props.justObj.fObjname}</li>
                <li>{props.justObj.fObjgen}</li>
            </ul>
        </div>
    )
}