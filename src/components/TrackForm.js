import React, { useContext } from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import Spacer from './spacer'
import { Context as LocationContext } from "../context/locationContext"

const TrackForm = () => {
    const { state: { name, recording, locations},
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)

    console.log(locations.length);
    return (
        <View>
            <Spacer>
                <Input value={name}
                    onChangeText={changeName}
                    placeholder="Enter Name" />

            </Spacer>
            {
                recording
                    ? <Button title="Stop" onPress={stopRecording} />
                    :
                    <Button title="Start Recording" onPress={startRecording} />
            }
        </View>
    )
}

export default TrackForm

const styles = StyleSheet.create({})
