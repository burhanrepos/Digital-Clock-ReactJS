import React,{useState} from "react";

const App=()=>{

    const [curTime,setCurTime]=useState(new Date().toLocaleTimeString());
    const [curDate,setCurDate]=useState(new Date().toLocaleDateString());
    const UpdateClock=()=>{
        setCurTime(new Date().toLocaleTimeString());
        setCurDate(new Date().toLocaleDateString());
    }
    setInterval(UpdateClock,1000);
    return(
        <>
        <h1>{curTime}</h1>
        <p>{curDate}</p>
        </>
    );
}
export default App;