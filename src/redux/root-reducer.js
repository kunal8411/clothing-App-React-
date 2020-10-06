//actual base reducer object contains whole state

import  {combineReducers} from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user:userReducer
});
