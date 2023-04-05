import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action ) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        default:
            return state;
    }
};

const signup = (dispatch) => async ({ email, password}) => {
    try {
        const response = await trackerApi.post('/signup', {email,password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signup', payload: response.data.token});
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with Sign Up'})
    }
    
    
    
    //make API request to sign up with email and password
    //if success, modify state
    //if failure, error message
};

const signin = (dispatch) => {
    return ({ email, password}) => {
        //try to sign in 
        //success, upadate state
        //failure, err msg
    };
};

const signout = (dispatch) => {
    return () => {
        //signout
    }
}

export const { Context, Provider } = createDataContext (
    authReducer,
    { signup, signin, signout},
    { token: null, errorMessage: ''}
);