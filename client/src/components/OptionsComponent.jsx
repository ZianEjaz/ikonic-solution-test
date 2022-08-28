import React from "react";
import { useState } from "react";

const OptionsComponent = ({ options, func}) => {
  const [selctedOpt, setSelectedOpt] = useState("")
 

 const setCorrectInput = (event)=>{

  setSelectedOpt( event.target.value)
  func(event.target.value)
  }
  
  return (
    <form className="w-1/2 flex flex-wrap">
      {options.map((item, index) => {
        return (
          <div key={index} className="w-1/2 p-3">

          <div  className=" bg-gray-300 rounded-xl m-5 p-3">
          
          <input id={index} type="radio" value={item.option} name={selctedOpt} onChange={setCorrectInput} checked={item.correct === true? true : false} />
          <label htmlFor={index} className="pl-3 cursor-pointer">{item.option}</label>
            
            
          </div>
          </div>
        );
      })}
    </form>
  );
};

export default OptionsComponent;
