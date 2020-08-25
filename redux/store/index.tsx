import { createStore, applyMiddleware, Store, compose } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import reducers from '../reducers/index';
import rootSaga from '../sagas';

export interface SagaStore extends Store {
    sagaTask?: Task;
}

export const makeStore: MakeStore<any> = (initialState: any) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducers, initialState, compose(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper<any>(makeStore, { debug: true });
