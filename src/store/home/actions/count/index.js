export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS'
export const DECREMENT_SUCCESS = 'DECREMENT_SUCCESS'

export function increment(val) {
  return {
    type: INCREMENT,
    payload: val,
  }
}

export function decrement(val) {
  return {
    type: DECREMENT,
    payload: val,
  }
}

export function incrementSuccess(val) {
  return {
    type: INCREMENT_SUCCESS,
    payload: val,
  }
}

export function decrementSuccess(val) {
  return {
    type: DECREMENT_SUCCESS,
    payload: val,
  }
}