import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Select from 'react-select';
import s from './style.module.scss';

const customStyles = {
  control: (styles: any) => {
    return {
      ...styles,
      height: 56,
      borderRadius: '1rem',
      borderColor: '#E1E1E1',
      boxShadow: 'none',
      padding: '12px 16px',
      cursor: 'pointer',
      fontFamily: "'Poppins', Sans-Serif",
      fontSize: '16px',
      lineHeight: '24px',
      '&:hover': {
        borderColor: '#E1E1E1'
      }
    };
  },
  valueContainer: (styles: any) => ({
    ...styles,
    padding: 0
  }),
  singleValue: (styles: any) => ({
    ...styles,
    fontFamily: "'Poppins', Sans-Serif",
    fontSize: '16px',
    lineHeight: '24px',
    color: '#000'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: (styles: any, state: any) => {
    return {
      ...styles,
      color: '#828282',
      padding: 0,
      transform: (state.selectProps.menuIsOpen && 'rotate(180deg)') || 'rotate(0deg)',
      '&:hover': {
        color: '#828282'
      }
    };
  },
  menuList: (styles: any) => ({
    ...styles,
    padding: 0
  }),
  menu: (styles: any) => ({
    ...styles,
    marginTop: '3px',
    borderRadius: '1rem',
    overflow: 'hidden'
  }),
  option: (styles: any, state: any) => {
    return {
      ...styles,
      padding: '16px',
      textAlign: 'start',
      fontFamily: "'Poppins', Sans-Serif",
      fontSize: '16px',
      lineHeight: '24px',
      cursor: 'pointer',
      color: '#000000',
      borderBottom: '1px solid #E1E1E1',
      backgroundColor: (state.isSelected && '#E8F0FD') || '#ffffff',
      '&:hover': {
        backgroundColor: '#E8F0FD'
      },
      '&:last-child': {
        borderBottom: 'none'
      }
    };
  },
  input: (styles: any) => ({
    ...styles,
    padding: 0
  })
};

interface Props {
  className?: any;
  name?: any;
  label?: any;
  hideLabel?: any;
  options?: any;
  onChange?: any;
  defaultValue?: any;
  value?: any;
  isSearchable?: any;
  placeholder?: any;
  isDisabled?: any;
  newStyles?: any;
}
export default function AppSelect({
  className,
  name,
  label,
  hideLabel,
  options,
  onChange,
  defaultValue,
  value,
  isSearchable,
  placeholder,
  isDisabled,
  newStyles
}: Props) {
  return (
    <div className={cn(s.wrapper, className)}>
      {!hideLabel && (
        <label className={s.label} htmlFor={name}>
          {label}
        </label>
      )}
      <Select
        name={name}
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        styles={{ ...customStyles, ...newStyles }}
        isSearchable={isSearchable}
        placeholder={placeholder}
        isDisabled={isDisabled}
      />
    </div>
  );
}

AppSelect.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  options: PropTypes.array,
  defaultValue: PropTypes.object,
  onChange: PropTypes.func,
  newStyles: PropTypes.object,
  isSearchable: PropTypes.bool,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool
};
