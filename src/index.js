import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import { applyMiddleware } from "redux"
import { legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "./store/reducers"
import './index.css';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

export default store