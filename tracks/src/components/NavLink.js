import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Spacer from './spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({navigation, buttonText, routeName}) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>{buttonText}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        alignSelf: "center"
    }
})

export default withNavigation(NavLink)