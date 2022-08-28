import React from "react";

const AllQuestions = ({ data, getEditKey }) => {
  return (
    <div>
        {data.map((item, value)=>{
            return <div key={value} className="bg-gray-300 p-3 rounded-xl mb-3">
                
                <p className="flex mb-3 border-b pb-1">Question # {value +1}
                <span className="border border-black p-1 rounded-lg ml-auto cursor-pointer" onClick={()=>getEditKey(value)}>Edit</span>
                 </p>{item.question}</div>
        })}
    </div>
  );
};

export default AllQuestions;
