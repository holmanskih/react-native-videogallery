import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import appReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

// const tabNavigationMiddleware = createReactNavigationMiddleware(
// 	'root',
// 	state => state.navigation
// );
const tabNavigatorMiddleware = createReactNavigationReduxMiddleware(
	state => state.navigation,
  );

let logger = createLogger({
	timestamps: true,
	duration: true,
});

const appStore = createStore(
	appReducer,
	applyMiddleware(logger, tabNavigatorMiddleware),
);

export default appStore;