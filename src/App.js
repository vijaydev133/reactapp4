import logo from './logo.svg';
import './App.css';
import FunctComp from "./FunctComp"
import ClassComp from "./ClassComp"
import FuncC from "./FuncC"
import ClassC from "./ClassC"

function App() {
// let functobj = {
//   name : "Chellak",
//   age : 3,
//   gender : "male"
// }
// let someName ;
// function getName(data){
//   console.log(data);
  
// }

// let ClassObj = {
//   college : "kalasalingam University",
//   dept : "E&I",
//   yearOfPassing : "2020"
// }

// function getClg(data){
//   console.log(data);
// }

let fObj = {
  fObjname : "React",
  fObjgen : "male"
}

function forFuncC(data){
  console.log(data);
}

function forClass(data){
  console.log(data);
}
  return (
    <div >
      {/* <FunctComp name = {"Vijay"} obj = {functobj} getname = {getName}/>
     <ClassComp myDegree= {"B.tech"} clgObj = {ClassObj} getClgName = {getClg}/> */}
      <FuncC name = "From React app FuncC" justObj={fObj} getFunc = {forFuncC}/>
      <ClassC name = "From React app ClassC" obj1 = {fObj} getClass = {forClass}/>
    </div>
  );
}

export default App;
