import { Action } from "redux-actions";
import { delay } from "redux-saga";
import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  changed,
  DECREMENT_ASYNC,
  INCREMENT_ASYNC,
  received,
  requesting
} from "../actions";

export function* incrementGenerator(action: Action<number>) {
  yield put(requesting());
  yield call(delay, 1000);
  const { num } = yield select();
  yield put(changed(num + 1));
  yield put(received());
}

export function* decrementGenerator(action: Action<number>) {
  yield put(requesting());
  yield call(delay, 1000);
  const { num } = yield select();
  yield put(changed(num - 1));
  yield put(received());
}
/**
 * saga
 */
const saga = function*() {
  yield takeEvery(INCREMENT_ASYNC, incrementGenerator);
  yield takeEvery(DECREMENT_ASYNC, decrementGenerator);
};

export default saga;
