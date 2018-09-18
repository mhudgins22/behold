import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {BrowserRouter} from "react-router-dom";

import itemReducer from "./store/reducers/itemReducer";
import authReducer from "./store/reducers/authReducer";
import charReducer from "./store/reducers/charReducer";
import uploadReducer from "./store/reducers/uploadReducer";

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	items: itemReducer,
	auth: authReducer,
	char: charReducer,
	upload: uploadReducer
});

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
));

const app =(
	<Provider store = {store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
