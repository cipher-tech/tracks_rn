import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from "react-native-elements"
import Spacer from '../components/spacer'
const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign up for tracker</Text>
            </Spacer>
            <Input label="Email" />
            <Spacer />
            <Input label="Password" />
            <Spacer>
                <Button title="Sign up" />
            </Spacer>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250
    }
})
