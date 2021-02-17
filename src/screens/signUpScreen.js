import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from "react-native-elements"
import Spacer from '../components/spacer'
import { Context } from '../context/authContext'

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const {state,signUp} = useContext(Context)
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
                <Button title="Sign up" onPress={() => signUp({email,Password})} />
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
