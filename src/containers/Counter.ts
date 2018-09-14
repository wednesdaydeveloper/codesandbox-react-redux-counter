import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import Counter, { IDispatchProps, IStateProps } from "../components/Counter";
import { decrementAsync, incrementAsync } from "../actions";
import { ICounterState } from "../reducers";

export function mapStateToProps(state: ICounterState): IStateProps {
  return {
    loading: state.loading,
    num: state.num
  };
}

export function mapDispatchToProps(dispatch: Dispatch<Action>): IDispatchProps {
  return {
    onDecrementAsync: (num: number) => dispatch(decrementAsync(num)),
    onIncrementAsync: (num: number) => dispatch(incrementAsync(num))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
