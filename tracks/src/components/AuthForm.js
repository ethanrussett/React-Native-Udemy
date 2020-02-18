import React, {useState} from 'react'
import {Text, Button, Input} from 'react-native-elements'
import {StyleSheet} from 'react-native'
import Spacer from './spacer'

const AuthForm = ({ headerText, errorMessage, buttonText, onSubmit }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return(
    <>
        <Spacer>
            <Text h3 style={styles.header} >{headerText}</Text>
        </Spacer>

        <Input 
            label="Email" 
            value={email} 
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
        />

        <Spacer/>

        <Input 
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}

        />
        {errorMessage ? 
            (<Text style={styles.errorMessage}>{errorMessage}</Text>) 
            : null}
        <Spacer>
            <Button title={buttonText} onPress={() => onSubmit({email, password})}/>
        </Spacer>
    </>
    )
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'center'
    },
    errorMessage: {
        color: 'red',
        fontSize: 15,
        marginLeft: 15,
        marginTop: 15,
        alignSelf:'center'
        
    },
})

export default AuthForm