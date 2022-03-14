import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import cn from "classnames";

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
  chilren,
}) => {
  let classNames = className?.split(" ")?.map((style) => styles[style]) || [];

  let input = (
    <input
      className={cn(styles.inputItem, classNames)}
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
        className={cn(styles.inputItem, classNames)}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      >
        {chilren}
      </select>
    );
  }
  return (
    <div className={styles.inputWrapper}>
      <div
        className={cn(
          styles.inputContainer,
          errors[name] ? styles["error"] : "",
          classNames
        )}
      >
        {input}
        {icon}
      </div>
      {errors[name] && <p className={styles.errorMsg}> {errors[name]} </p>}
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
  children: PropTypes.element,
};

export default Input;
