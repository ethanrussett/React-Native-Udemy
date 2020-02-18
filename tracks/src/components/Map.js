import React, {useContext, useState, useEffect} from 'react'
import { View, StyleSheet, ActivityIndicator} from 'react-native'
import { Button } from 'react-native-elements'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext} from '../context/LocationContext'
import Spacer from './spacer'


const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)
    if (!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>
    }else{
        console.log(locations.length)
    }
    
    return(
        <>
            <MapView 
                style={styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01}}
            >
                <Circle
                    center={currentLocation.coords}
                    radius={50}
                    strokeColor="rgba(158,158,255,1.0)"
                    fillColor="rgba(158,158,255,0.3)"
                />
                <Polyline coordinates={locations.map(loc => loc.coords)}/>
            </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map