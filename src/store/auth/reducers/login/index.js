import * as actions from "../../actions/types";
import produce from "immer";

const initialState = {
  isAuth: false,
  authData: null,
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case actions.AUTH_LOGIN:
        draft.isLoading = true;
        draft.error = null;
        break;
      case actions.AUTH_LOGIN_SUCCESS:
        draft.isLoading = false;
        draft.authData = payload;
        break;
      case actions.AUTH_LOGIN_FAILED:
        draft.isLoading = false;
        draft.error = payload;
        break;
      default:
        break;
    }
  });

export default reducer;
