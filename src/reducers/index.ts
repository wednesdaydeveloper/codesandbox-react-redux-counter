import { Action, handleActions } from "redux-actions";
import { CHANGED, REQUESTING, RECEIVED } from "../actions";
/**
 * State のインターフェイス
 */
export interface ICounterState {
  num: number;
  loading: boolean;
}

/**
 * state の初期値
 */
const initState: ICounterState = { num: 0, loading: false };

/**
 * reducer
 */
export default handleActions<ICounterState, number>(
  {
    [CHANGED]: (state: ICounterState, action: Action<number>) => {
      return { ...state, num: action.payload! };
    },
    [REQUESTING]: (state: ICounterState, action: Action<any>) => {
      return { ...state, loading: true };
    },
    [RECEIVED]: (state: ICounterState, action: Action<any>) => {
      return { ...state, loading: false };
    }
  },
  initState
);
