import { configureStore } from '@reduxjs/toolkit';
// import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import reducer from './root-reducer';
const sagaMiddleware = createSagaMiddleware();
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

// export const history = syncHistoryWithStore(createBrowserHistory(), store)
export default store;
