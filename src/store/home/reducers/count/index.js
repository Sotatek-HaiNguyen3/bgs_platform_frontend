import * as actions from '../../actions/count'
import { merge } from 'ramda'

const initialState = {
  count: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.INCREMENT_SUCCESS:
      return {
        ...state,
        count: state.count + 1
      }
    case actions.DECREMENT_SUCCESS:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

// Selectors
export const getCounter = state => state.home.counts.count