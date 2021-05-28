
//--------------------current time in react js------------------------------------------------------


import React from 'react';
import { useState } from 'react/cjs/react.development';
const App=()=>{
  //const currDate =new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const[ctime, setCtime]= useState(currTime);

const UpdateTime=()=>{
  const currCTime = new Date().toLocaleTimeString();
  setCtime(currCTime);
};
  return(
    <div>
  

   <h1>Current time</h1>
   <h4>{ctime}</h4>
   <button onClick={UpdateTime}>Set Time</button>
   </div>
  );

}
export default App;




  


  