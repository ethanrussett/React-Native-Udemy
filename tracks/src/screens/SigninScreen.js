import React, {useContext} from 'react'
import { View, StyleSheet} from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import {NavigationEvents} from 'react-navigation'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
    const {state, signin, clearErrorMessage } = useContext(AuthContext)
    
    return ( 
    <View style={styles.container}>
        <NavigationEvents 
            onWillBlur={(clearErrorMessage)}
        />
        <AuthForm 
           headerText= "Sing In for Tacker"
           errorMessage= {state.errorMessage}
           buttonText="Sign In" 
           onSubmit={signin}
        />
        <NavLink 
            buttonText="Dont have an account? Sign up instead"
            routeName= "Signup"
        />
    </View>
    )
};

SigninScreen.navigationOptions = {
    headerShown: false
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
})

export default SigninScreen