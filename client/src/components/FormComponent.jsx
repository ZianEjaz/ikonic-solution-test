import React from "react";

const TextArea = (props) => {
  // destructuring props
  const { label, changeFunc, value} = props;
  return (
    <div className="w-full">
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {label}
      </label>
      <textarea
      onChange={changeFunc}
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Your Text..."
      value={value}
      
      />
      
    </div>
  );
};

export default TextArea;
