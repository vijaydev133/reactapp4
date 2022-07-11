import React from "react"

export default class ClassC extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                <ul>
                    <li>{this.props.obj1.fObjname}</li>
                    <li>{this.props.obj1.fObjgen}</li>
                </ul>
                <button onClick={()=>this.props.getClass("this is from button clicked function")}>click here</button>
            </div>
        )
    }
}