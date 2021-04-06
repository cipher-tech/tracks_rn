import React, { useContext } from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from "../context/locationContext"
const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext)
    // console.log(state);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    let points = []
    // for (let i = 0; i < 20; i++) {
    //     if (i % 2 === 0) {
    //         points.push({
    //             latitude: 6.315999 + i * 0.0031,
    //             longitude: 3.205999 + i * 0.0091,
    //         })
    //     } else {
    //         points.push({
    //             latitude: 6.315999 + i * 0.00366,
    //             longitude: 3.205999 + i * 0.0061,
    //         })
    //     }
    // }
    return (
        <View>
            {/* <Text>I am a map </Text> */}
            <MapView
                style={styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01
                }}
                region={{
                    // latitude: 6.524379,
                    // longitude: 3.379206,
                    ...currentLocation.coords,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01
                }}
            >
                <Circle
                    center={
                        {
                            // latitude: 6.524379,
                            // longitude: 3.379206,
                            ...currentLocation.coords,
                        }
                    }
                    radius={40}
                    strokeColor="rgba(158, 158, 255, 1.0)"
                    fillColor="rgba(158, 158, 255, 0.3)"
                />
                {/* <Polyline coordinates={points} /> */}
            </MapView>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
})
