import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Input = ({
  type,
  name,
  onChange,
  onBlur,
  errors,
  value,
  icon,
  className,
  placeholder,
}) => {
  let input = (
    <input
      className={["input-item"].join(" ")}
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );

  if (type === "select") {
    input = (
      <select
        className={["input-item"].join(" ")}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">Choose one</option>
      </select>
    );
  }
  return (
    <div
      className={[
        "input-container",
        errors[name] ? "error" : "",
        className || "",
      ].join(" ")}
    >
      {input}
      {icon}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  icon: PropTypes.element,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
