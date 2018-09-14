import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import saga from "./sagas";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer, applyMiddleware(sagaMiddleware, logger));

// Saga を起動する
sagaMiddleware.run(saga);
