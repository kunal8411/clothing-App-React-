// user reducer-->slice of an reducer(redux store)
//reducer is just a normal function,
//state is initial state, passed from redux store
// and action contains payload 
//action.type will be the string 
import {UserActionTypes} from './user.types'
const INITIAL_STATE={
    currentUser:null

}
const userReducer =(state = INITIAL_STATE, action)=>{
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER: 
            return{
                ...state,
                currentUser:action.payload

            }
            default:
                return state;

    }
}

export default userReducer;