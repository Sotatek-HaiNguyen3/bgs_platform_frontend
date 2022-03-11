import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Button = ({
  type,
  title,
  icon,
  iconSize,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={["btn", className || ""].join(" ")}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon} <span> {title} </span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  Icon: PropTypes.element,
  iconSize: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
