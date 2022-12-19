import React from "react";
import { createRef, useRef } from "react";

const Form = ({ formItems, searchMovies }) => {
  const inputRefs = useRef([]);
  inputRefs.current = formItems.map(
    (elem, i) => inputRefs.current[i] ?? createRef()
  );

  const onSubmit = (event) => {
    event.preventDefault();
    let searchValue = inputRefs.current[0].current.value;
    searchMovies(searchValue);
  };

  return (
    <div className="form-wrapper position-relative">
      <form onSubmit={onSubmit}>
        {formItems.map((item, i) => (
          <input
            key={i}
            type={item.type}
            className={item.className}
            placeholder={item.placeholder}
            ref={inputRefs.current[i]}
          ></input>
        ))}

        <button
          type="submit"
          className="btn position-absolute end-0 top-0 border-0 bg-transparent"
        >
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
