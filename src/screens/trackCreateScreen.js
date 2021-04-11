import React, { useContext} from 'react'
import { StyleSheet} from 'react-native'
import { Text } from 'react-native-elements'
import {useNavigation} from "expo-status-bar"
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/map'
import {Context as LocationContext} from "../context/locationContext"
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

// import "../_mockLocation"
const TrackCreateScreen = () => {
    const {state, addLocation} = useContext(LocationContext)
    useNavigation
    const [err] = useLocation((location) => {
        addLocation(location, state.recording)
    })
    return (
        <SafeAreaView>
            <Text h3>TrackCreate Screen</Text>
            <Map />
            <TrackForm /> 
            {err ? <Text>{err}</Text> : null}
        </SafeAreaView>
    )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
