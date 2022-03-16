export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS';
export const DECREMENT_SUCCESS = 'DECREMENT_SUCCESS';

export function increment(val: any) {
  return {
    type: INCREMENT,
    payload: val
  };
}

export function decrement(val: any) {
  return {
    type: DECREMENT,
    payload: val
  };
}

export function incrementSuccess(val: any) {
  return {
    type: INCREMENT_SUCCESS,
    payload: val
  };
}

export function decrementSuccess(val: any) {
  return {
    type: DECREMENT_SUCCESS,
    payload: val
  };
}
