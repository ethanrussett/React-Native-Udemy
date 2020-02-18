import React, {useContext} from 'react'
import { View, StyleSheet} from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import {NavigationEvents} from 'react-navigation'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext)


    return ( 
    <View style={styles.container}>
        <NavigationEvents 
            onWillBlur={clearErrorMessage}
        />
        <AuthForm 
           headerText= "Sing Up for Tacker"
           errorMessage= {state.errorMessage}
           buttonText="Sign Up" 
           onSubmit={signup}
        />
        <NavLink 
            buttonText="Already have an account? Sign in instead"
            routeName= "Signin"
        />
    </View>
    )
}

SignupScreen.navigationOptions = {
    headerShown: false   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },

})

export default SignupScreen