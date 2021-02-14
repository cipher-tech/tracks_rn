import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const TrackListScreen = ({navigation}) => {
    return (
        <View>
            <Text style={{fontSize: 48}}>TrackList Screen</Text>
            <Button title="Go to Track detail" onPress={()=> navigation.navigate("TrackDetail")}/>
            <Button title="Go to Main flow" onPress={()=> navigation.navigate("TrackListFlow")}/>
        </View>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({})
