import { all } from 'redux-saga/effects';
import usersSagas from './Users';

export default function* rootSaga(getState) {
    yield all([usersSagas()]);
}
