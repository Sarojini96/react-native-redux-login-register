import {combineReducers} from 'redux';
import userReducer from './usersReducer';
import reducer from './createusersReducers';
import loginreducer from './loginReducer';
export default combineReducers({
  createusers: reducer,
  users: userReducer,
  login: loginreducer,
});
