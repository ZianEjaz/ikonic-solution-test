import React from "react";
import FormComponent from "./FormComponent";

const OptionsComponent = ({ options }) => {
  return (
    <div>
      {options.map((item, index) => {
        return (
          <span key={index}>
            <label htmlFor={item.option}>{item.option}</label>
            <input type="radio" value={item.option} />
          </span>
        );
      })}
    </div>
  );
};

export default OptionsComponent;
