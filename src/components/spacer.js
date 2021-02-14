import { View, Text,StyleSheet } from 'react-native'
import React from "react"
const Spacer = ({children}) => {
    return (
        <View style={style.spacer}>
           {children}
        </View>
    )
}

const style = StyleSheet.create({
    spacer: {
        margin: 15  
    }
})

export default Spacer
