import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const initialState = {}

//use 'compose' to put enhancers together
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(...[thunk]))
)

export default store
