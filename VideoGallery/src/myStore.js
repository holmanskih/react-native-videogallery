import appReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

let logger = createLogger({
	timestamps: true,
	duration: true,
});

const appStore = createStore(appReducer);

export default appStore;