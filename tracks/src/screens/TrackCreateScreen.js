import React, {useContext, useCallback, useEffect } from 'react'
import { StyleSheet} from 'react-native'
import {Text, Button} from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'

import useLocation from '../hooks/useLocation'
import Spacer from '../components/spacer'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import {Context as LocationContext} from '../context/LocationContext'

import '../_mockLoaction'

const TrackCreateScreen = ({ isFocused }) => {
    
    const { state, addLocation } = useContext(LocationContext)
    
    const callback = useCallback(
        location => {
        addLocation(location, state.recording)
    }, [state.recording])
    
    
    const [err] = useLocation(isFocused || state.recording, callback) 

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2 style={styles.header}>Create a Track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        margin: 10
    }
})

export default withNavigationFocus(TrackCreateScreen)