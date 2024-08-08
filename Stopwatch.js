import {useState,useEffect} from "react";

function Stopwatch(){

   const [time,settime]=useState(0);
   const [state,setstate]=useState(false);

    useEffect (() =>{
       let increment;
       if(state){
          increment = setTimeout(()=>{settime(time+1)},1000);
       }
       return()=>{ clearTimeout(increment)}
    },[state,time]);

   function handlestart (){
      setstate(true);
   }

   function handlestop (){
      setstate(false);
   }

   function handlereset (){
      setstate(false);
      settime(0);
   }
    let timeconverter= (time)=>{
      let minutes=Math.floor(time/60).toString().padStart(2,"0");
      let seconds=Math.floor(time%60).toString().padStart(2,"0");
      return `${minutes}:${seconds}`;
   }

   return(

      <div className="parent">
        <div className="textbox">
             <p className="heading">This Is a Stopwatch </p>
             <p className="display">TIME</p>
             <p className="timedisplay"> {timeconverter(time)}</p>
         </div>
      < div className="btncon">
        <button className="startbtn" onClick={handlestart}>start</button>
         <button className="stopbtn" onClick={handlestop}>stop</button>
         <button className="resetbtn" onClick={handlereset}>reset</button>
        </div>

      </div>
   );
}
export default Stopwatch