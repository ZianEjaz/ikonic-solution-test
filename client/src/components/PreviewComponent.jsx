import React from "react";

const PreviewComponent = ({ heading, text, className }) => {
  
    
  return (
    <div className={className}>
      <h2 className="font-bold text-lg">{heading}</h2>
      {/* {textArray.map((item, index) => {
     return   <p key={index}>{item}</p>;
      })} */}
      <p>{text}</p>
    </div>
  );
};

export default PreviewComponent;
