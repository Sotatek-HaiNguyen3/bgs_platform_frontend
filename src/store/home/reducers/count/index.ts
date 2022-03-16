import * as actions from '../../actions/count';

const initialState = {
  count: 0
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.INCREMENT_SUCCESS:
      return {
        ...state,
        count: state.count + 1
      };
    case actions.DECREMENT_SUCCESS:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

// Selectors
export const getCounter = (state: any) => state.home.counts.count;
