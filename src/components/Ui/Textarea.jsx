import React from "react";

const Textarea = ({className, ariaLabel,name, value, onChange, label }) => {
  return (
    <>
      <div className={className}>
        <span className="input-group-text">{label}</span>
        <textarea className="form-control" onChange={onChange} name={name} value={value} aria-label={ariaLabel}/>
      </div>
    </>
  );
};

export default Textarea;
