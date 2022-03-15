import React from 'react'
import style from './style.module.scss';
import Icons from 'assets/icons'

export default function RadioView({ label, checked, onChange, name, id }) {
  return (
    <div className={style.radioView}>
      <div className={style.iconCheckbox} onClick={() => onChange(name, id)}>
        <img className={style.icon} src={checked ? Icons.IconRadioChecked : Icons.IconRadioUnCheck} alt="radio-icon"/>
      </div>
      <p className={style.label} onClick={() => onChange(name, id)}>{label}</p>
    </div>
  )
}
