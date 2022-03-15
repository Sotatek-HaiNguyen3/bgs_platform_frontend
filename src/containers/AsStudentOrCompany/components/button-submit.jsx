import React from 'react'
import style from '../style.module.scss';
import cn from 'classnames'

export default function ButtonSubmit({ title, className }) {
  return (
    <button className={cn(style.buttonView, className )}>{title}</button>
  )
}
