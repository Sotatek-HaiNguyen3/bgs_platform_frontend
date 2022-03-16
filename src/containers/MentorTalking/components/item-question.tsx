import React from 'react';
import RadioView from './radio-view';
import style from './style.module.scss';

export default function ItemQuestion({ item, index, onChange, itemActive }: any) {
  return (
    <div className={style.itemQuestion}>
      <h1 className={style.question}>
        <span className={style.numberQuestion}>{`${index + 1}. `}</span>
        <p>{item.question}</p>
      </h1>
      <RadioView
        checked={itemActive.value === `${index}-answer`}
        onChange={onChange}
        name={index}
        id={`${index}-answer`}
        label={item.answer}
      />
      <RadioView
        checked={itemActive.value === `${index}-answer1`}
        onChange={onChange}
        name={index}
        id={`${index}-answer1`}
        label={item.answer1}
      />
      <RadioView
        checked={itemActive.value === `${index}-answer2`}
        onChange={onChange}
        name={index}
        id={`${index}-answer2`}
        label={item.answer2}
      />
      <RadioView
        checked={itemActive.value === `${index}-answer3`}
        onChange={onChange}
        name={index}
        id={`${index}-answer3`}
        label={item.answer3}
      />
      {/* <p className={style.answerView}>{item.answer}</p>
      <p className={style.answerView}>{item.answer1}</p>
      <p className={style.answerView}>{item.answer2}</p>
      <p className={style.answerView}>{item.answer3}</p> */}
    </div>
  );
}
