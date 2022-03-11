import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from 'store/home/actions/index'
import { getCounter } from 'store/home/reducers/count'

import s from './style.module.scss'

const Counts = () => {
  const count = useSelector(getCounter)
  const dispatch = useDispatch()
  return (
    <div className={s.swapper}>
      <button
        className={s.button}
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span className={s.value}>{count}</span>
      <button
        className={s.button}
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  )
}

export default Counts