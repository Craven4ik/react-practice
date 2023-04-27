import toggleReducer from "./reducer";
import { createStore } from 'redux'

const store = createStore(toggleReducer);

export default store