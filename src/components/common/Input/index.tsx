import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import cn from 'classnames';

interface Props {
  type?: any;
  name?: any;
  onChange?: any;
  onBlur?: any;
  errors?: any;
  value?: any;
  icon?: any;
  className?: any;
  placeholder?: any;
  chilren?: any;
  extraIcon?: any;
  changeIcon?: any;
}

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
  extraIcon,
  changeIcon
}: Props) => {
  let classNames = className?.split(' ')?.map((style: any) => styles[style]) || [];

  let input = (
    <input
      className={cn(styles.inputItem, classNames)}
      type={type === 'password' && changeIcon ? 'text' : type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );

  if (type === 'select') {
    input = (
      <select
        className={cn(styles.inputItem, classNames)}
        // type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      >
        {chilren}
      </select>
    );
  }
  return (
    <div className={cn(styles.inputWrapper, className)}>
      <div className={cn(styles.inputContainer, errors[name] ? styles['error'] : '', classNames)}>
        {input}
        {changeIcon ? extraIcon : icon}
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
  extraIcon: PropTypes.element,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.element,
  changeIcon: PropTypes.bool
};

export default Input;
