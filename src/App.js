//import React, { useEffect } from "react";
import Home from "./Home";
import GetDataComponent from "./Get1";
import GetData2Component from "./Get2";
//import axios from "axios";

function App(){

  // useEffect(()=>{
  //   axios.get("http://127.0.0.1:8000/actors/")
  //   .then((res) => console.log(res))
  //   .catch((err)=>console.error(err));
  // } , []); 
  return (
    <div>
      <Home/>
      <GetDataComponent/>
      <GetData2Component/>
    </div>
    
  );
}
export default App;

