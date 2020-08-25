import { createStore, applyMiddleware, Store, compose } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';


export interface SagaStore extends Store {
  sagaTask?: Task;
}
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const makeStore: MakeStore<any> = (initialState: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<any>(makeStore, { debug: true });
