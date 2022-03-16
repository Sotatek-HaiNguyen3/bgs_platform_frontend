import React from 'react';
import style from './style.module.scss';

export default function RadioView({ label, checked, onChange, name, id }: any) {
  return (
    <div className={style.radioView}>
      <div className={style.iconCheckbox} onClick={() => onChange(name, id)}>
        <img
          className={style.icon}
          src={checked ? '/svg-image/radio-checked.svg' : '/svg-image/radio-uncheck.svg'}
          alt="radio-icon"
        />
      </div>
      <p className={style.label} onClick={() => onChange(name, id)}>
        {label}
      </p>
    </div>
  );
}
