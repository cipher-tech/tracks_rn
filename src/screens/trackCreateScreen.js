import React, { useContext} from 'react'
import { StyleSheet} from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/map'
import {Context as LocationContext} from "../context/locationContext"
import useLocation from '../hooks/useLocation'

// import "../_mockLocation"
const TrackCreateScreen = () => {
    const {addLocation} = useContext(LocationContext)
    const [err] = useLocation(addLocation)
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
