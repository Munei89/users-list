import { createStore, applyMiddleware, Store, compose } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';


export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore: MakeStore<any> = (initialState: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<any>(makeStore, { debug: true });
