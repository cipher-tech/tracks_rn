import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from "react-native-elements"
import Spacer from '../components/spacer'
const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign up for tracker</Text>
            </Spacer>
            <Input label="Email"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setEmail}
            />
            <Spacer />
            <Input label="Password"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setPassword} />
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
        marginBottom: 10
    }
})
