import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import cn from "classnames";

const Button = ({
  type,
  title,
  icon,
  iconSize,
  className,
  onClick,
  disabled,
}) => {
  let classNames = className?.split(" ")?.map((style) => styles[style]) || [];
  return (
    <button
      className={cn(styles.btn, classNames)}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon} <span className={styles.btnTitle}> {title} </span>
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
