import React from "react"


export default function FunctComp(props){
    return(
        <div>
            <p>{props.name}</p>
        My pet name is <h1>{props.obj.name}</h1> and his age is
           <h1>{props.obj.age}</h1>
           <button onClick={()=>props.getname(props.obj.gender)}>click me</button>
        </div>
    )
}