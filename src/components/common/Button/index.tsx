import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import cn from 'classnames';

interface Props {
  type?: any;
  title?: any;
  icon?: any;
  iconSize?: any;
  className?: any;
  onClick?: () => void;
  disabled?: boolean;
}
const Button = ({ type, title, icon, className, onClick, disabled }: Props) => {
  let classNames = className?.split(' ')?.map((style: any) => styles[style]) || [];
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
  disabled: PropTypes.bool
};

export default Button;
