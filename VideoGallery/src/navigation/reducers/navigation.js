import AppNavigator from "../components";
import { HOME_SCREEN } from "../screen_names";

const INITIAL_STATE = AppNavigator.router.getStateForAction(
	AppNavigator.router.getActionForPathAndParams(HOME_SCREEN)
);

const navigationReducer = (state = INITIAL_STATE, action = {}) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);
	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
}

export default navigationReducer;