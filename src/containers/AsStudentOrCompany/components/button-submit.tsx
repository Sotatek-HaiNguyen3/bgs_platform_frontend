import React from 'react';
import style from '../style.module.scss';
import cn from 'classnames';

export default function ButtonSubmit({ title, className }: any) {
  return <button className={cn(style.buttonView, className)}>{title}</button>;
}
