import React from 'react'
import { StyleSheet} from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/map'

const TrackCreateScreen = () => {
    return (
        <SafeAreaView>
            <Text h3>TrackCreate Screen</Text>
            <Map />
        </SafeAreaView>
    )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
