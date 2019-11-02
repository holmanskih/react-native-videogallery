import {combineReducers} from 'redux';
import routes from '../navigation/reducers';
import navigationReducer from '../navigation/reducers/navigation';

export default combineReducers({
    navigation: navigationReducer,
    routes,
});