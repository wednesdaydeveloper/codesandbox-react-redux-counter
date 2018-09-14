import { createAction } from "redux-actions";

//
// action
//
export const INCREMENT_ASYNC: string = "counter/increment_async";
export const DECREMENT_ASYNC: string = "counter/decrement_async";
export const REQUESTING: string = "counter/requesting";
export const RECEIVED: string = "counter/received";
export const CHANGED: string = "counter/changed";

//
//  action creator
//
export const incrementAsync = createAction<number, number>(
  INCREMENT_ASYNC,
  (num: number) => num
);
export const decrementAsync = createAction<number, number>(
  DECREMENT_ASYNC,
  (num: number) => num
);
export const changed = createAction<number, number>(
  CHANGED,
  (num: number) => num
);
export const requesting = createAction(REQUESTING);
export const received = createAction(RECEIVED);
