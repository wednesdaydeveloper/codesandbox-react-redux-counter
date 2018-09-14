import * as React from "react";
import { render } from "react-dom";
import Counter from "./containers/Counter";
import store from "./store";
import { Provider } from "react-redux";

render(
  <Provider store={store}>
    <div>
      <Counter />
    </div>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
