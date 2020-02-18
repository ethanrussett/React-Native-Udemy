
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
//This import may 
import { AsyncStorage } from 'react-native'; //This import may need to be changed once depricated
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'signout':
            return {errorMessage: '', token: ''}
        default:
            return state
    
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}


const signup = (dispatch) => {
    return async ({ email, password}) => {
        // make api request to sign up with email and password
        // if we sign up, modify our state and say we are authenticated
        // if siginin up fails we need to refelct error message

        try {
            const response = await trackerApi.post('/signup', { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            navigate('TrackList')

        }catch(err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'})
            console.log(err)
        }
    }
}

const signin = (dispatch) => {
    return async ({email, password}) => {
        // Try to signin
        //Handle success by updating state
        // Handle failure by showing error message

        try {
            const response = await trackerApi.post('/signin', { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            navigate('TrackList')

        }catch(err) {
            dispatch({ type: 'add_error', payload: 'Email/Password didnt match any user'})
            console.log(err)
        }
    }
}

const signout = (dispatch) => async () => {
    //somehow signout
    await AsyncStorage.removeItem('token')
    dispatch({type: 'signout'})
    navigate('loginFlow')
}


const tryLocalSignin = dispatch => async () => {
    const token= await AsyncStorage.getItem('token')
    if (token) {
        dispatch({type: signin, payload: token})
        navigate('TrackList')
    }else{
        navigate('loginFlow')
    }
}
export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    { token: null, errorMessage: ''} 
)