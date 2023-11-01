import { applyMiddleware, createStore, } from 'redux'
import thunk from 'redux-thunk'
import logger from "redux-logger"
import reducer from "./reducers"


let useMiddleware = applyMiddleware(thunk)

if (process.env.NODE_ENV === "development") {
  useMiddleware = applyMiddleware(thunk, logger);
}

const store = createStore(
  reducer,
  useMiddleware
);
export default store
