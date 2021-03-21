import { requestPermissionsAsync, st } from 'expo-location'
import React, { useEffect, useState } from 'react'
import { StyleSheet} from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/map'

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            let {status} =  await requestPermissionsAsync()
            if(status !== 'granted'){
                setErr("Please Enable Tracking")
            }
        } catch (error) {
            setErr(error)
        }
    }
    useEffect(() => {
        startWatching()
    }, [])
    return (
        <SafeAreaView>
            <Text h3>TrackCreate Screen</Text>
            <Map />
            {err ? <Text>{err}</Text> : null}
        </SafeAreaView>
    )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
