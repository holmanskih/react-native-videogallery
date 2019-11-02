import { ActionConst } from 'react-native-router-flux';
import { HOME_SCREEN } from '../screen_names';

const INITIAL_STATE = {
	data: null,
	currentScene: HOME_SCREEN,
};

export default (state = INITIAL_STATE, action = { type, payload, routeName }) => {
	switch (action.type) {
		case ActionConst.FOCUS:
			// console.log(`FOCUS event fired with scene route: ${action.routeName}`);
			return {
				...state,
				currentScene: action.routeName,
			};

		case 'data':
			return {
				...state,
				data: action.payload,
			};
			
		default:
			return state;
	}
};