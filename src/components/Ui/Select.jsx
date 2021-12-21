import React from "react";

const Option = ({ label, value }) => {
  return <option value={value}>{label}</option>;
};

const Select = ({
  className,
  label,
  required,
  value,
  options,
  onChange,
  name,
}) => {
  return (
    <>
      <div className={className}>
        <label for="validationCustom04" className="form-label">
          {label}
        </label>
        <select
          className="form-select"
          id="validationCustom04"
          value={value}
          required={required}
          name={name}
          onChange={onChange}
        >
          <option value="" selected disabled>
            Seleccione
          </option>
          {options.map((element, index) => (
            <Option key={index} value={element.value} label={element.label} />
          ))}
        </select>
        <div className="invalid-feedback">Seleccione un animal.</div>
      </div>
    </>
  );
};

export default Select;
