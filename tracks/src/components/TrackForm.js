import React, { useContext } from 'react'
import { Button, Input } from 'react-native-elements'

import Spacer from './spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackFrom = () => {
    const {state: {name, recording, locations},
         startRecording, stopRecording, changeName } = useContext(LocationContext)
    
    const [saveTrack] = useSaveTrack()
    return <>
        <Spacer>
            <Input value={name} onChangeText= {changeName} placeholder="Enter Name"/>
        </Spacer>
        <Spacer>
            {recording 
                ? <Button title="Stop" onPress={stopRecording}/>
                : <Button title="Start Recording" onPress={startRecording} />
            }
        </Spacer>
        <Spacer>
            {
                !recording && locations.length
                ? <Button title="Save Recording" onPress={saveTrack}/>
                : null
            }
        </Spacer>
    </>
}

export default TrackFrom