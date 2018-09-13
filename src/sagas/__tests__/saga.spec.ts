import { testSaga } from "redux-saga-test-plan";
import { delay } from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import {
  requesting,
  changed,
  received,
  DECREMENT_ASYNC,
  INCREMENT_ASYNC
} from "../../actions";
import saga, { decrementGenerator, incrementGenerator } from "../../sagas";

describe("counter/rootSaga", () => {
  it("root saga task", () => {
    const target = saga();
    let ret;

    ret = target.next();
    expect(ret.value).toEqual(takeEvery(INCREMENT_ASYNC, incrementGenerator));
    ret = target.next();
    expect(ret.value).toEqual(takeEvery(DECREMENT_ASYNC, decrementGenerator));
    ret = target.next();
    expect(ret.done).toBeTruthy();
  });
});

describe("counter/incrementGenerator", () => {
  it("incrementGenerator task", () => {
    testSaga(incrementGenerator)
      .next()
      .put(requesting())
      .next()
      .call(delay, 1000)
      .next()
      .select()
      .next({ num: 123 })
      .put(changed(124))
      .next()
      .put(received())
      .next()
      .isDone();
  });
});

describe("counter/decrementGenerator", () => {
  it("decrementGenerator task", () => {
    testSaga(decrementGenerator)
      .next()
      .put(requesting())
      .next()
      .call(delay, 1000)
      .next()
      .select()
      .next({ num: 123 })
      .put(changed(122))
      .next()
      .put(received())
      .next()
      .isDone();
  });
});
