import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from "react-native-elements"
import Spacer from '../components/spacer'
import { Context } from '../context/authContext'

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { state, signUp } = useContext(Context)

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

            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button title="Sign up" onPress={async () => {
                   await signUp({ email, password })
                    // navigation.navigate("TrackListFlow")
                }} />
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
    },
    errorMessage: {
        color: "red",
        marginTop: 15,
        marginLeft: 15,
        fontSize: 16
    }
})
