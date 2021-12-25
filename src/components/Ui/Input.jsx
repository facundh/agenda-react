import React from "react";

const Input = ({
  className,
  label,
  type,
  value,
  required,
  onChange,
  name,
  inputClassName,
  labelClassName,
  checked
}) => {
  return (
    <>
      <div className={className}>
        <label
          for="validationCustom01"

          // Refrescar esto y el input classname porque lo tuvimos que hacer
          className={labelClassName ? labelClassName : "form-label"}
        >
          {label}
        </label>
        <input
          type={type}
          className={inputClassName ? inputClassName : "form-control"}
          id="validationCustom01"
          value={value}
          required={required}
          onChange={onChange}
          name={name}
          checked={checked ? checked : null}
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
    </>
  );
};

export default Input;
