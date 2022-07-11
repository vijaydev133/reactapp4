import React from "react"

export default class ClassComp extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.myDegree}</h1>
                <ul>
                    <li>{this.props.clgObj.college}</li>
                    <li>{this.props.clgObj.dept}</li>
                    <li>{this.props.clgObj.yearOfPassing}</li>
                </ul>
                <button onClick={()=>this.props.getClgName({CollegeName : this.props.clgObj.college})}>click here</button>
                {/* <p>{this.props.getClgName({})}</p> */}
            </div>
        )
    }
}