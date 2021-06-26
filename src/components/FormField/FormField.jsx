import React from "react";
import "./FormField.scss";

const FormField = ({ label, name, onChange, id, errors, ...others }) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        className="form-field__input"
        id={id}
        name={name}
        onChange={onChange}
        {...others}
      />
      {errors && <div>{errors}</div>}
    </div>
  );
};

export default FormField;
