import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import cn from 'classnames';
import AppSelect from 'components/common/AppSelect';
import s from './styles.module.scss';

interface Props {
  name?: any;
  className?: any;
  label?: any;
  options?: any;
  defaultValue?: any;
  handChange?: any;
  newStyles?: any;
  errors?: any;
}
export default function SelectFieldFormik(props: Props) {
  const { name, className, label, options, newStyles, errors } = props;

  const [{ value }, , { setValue }] = useField(name);

  const onChange = useCallback(
    (selectedOption) => {
      setValue(selectedOption.value);
    },
    [setValue]
  );

  return (
    <div>
      <AppSelect
        {...props}
        className={cn(className, errors[name] && s.required)}
        newStyles={newStyles}
        options={options}
        name={name}
        label={label}
        // hasError={true}
        onChange={onChange}
      />
      {errors[name] && <p className={s.errorMsg}> {errors[name]} </p>}
    </div>
  );
}

SelectFieldFormik.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.object,
  handChange: PropTypes.func,
  newStyles: PropTypes.object,
  errors: PropTypes.array
};
