// In Routes.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignUpScreen from '../screens/signUpScreen';
import SignInScreen from '../screens/signInScreen';
import TrackListScreen from '../screens/trackListScreen';
import TrackDetailScreen from '../screens/trackDetailScreen';
import TrackCreateScreen from '../screens/trackCreateScreen';
import AccountScreen from '../screens/accountScreen';
import { Context } from "../context/authContext"
const Stack = createStackNavigator();

const LoginFlow = createStackNavigator();
function LoginFlowScreen() {
    return (
        <LoginFlow.Navigator>
            <LoginFlow.Screen name="SignUp" component={SignUpScreen} />
            <LoginFlow.Screen name="SignIn" component={SignInScreen} />
        </LoginFlow.Navigator>
    )
}
const TrackListFlow = createStackNavigator()
function TrackListFlowScreen() {
    return (
        <TrackListFlow.Navigator>
            <TrackListFlow.Screen name="TrackList" component={TrackListScreen} />
            <TrackListFlow.Screen name="TrackDetail" component={TrackDetailScreen} />
        </TrackListFlow.Navigator>
    )
}

const MainFlow = createBottomTabNavigator()
// function MainFlowScreen() {
//     return (
//         <MainFlow.Navigator>
//             <MainFlow.Screen name="TrackListFlow" component={TrackListFlowScreen} />
//             <MainFlow.Screen name="TrackCreate" component={TrackCreateScreen} />
//             <MainFlow.Screen name="Account" component={AccountScreen} />
//         </MainFlow.Navigator>
//     )
// }

const getToken = async () => {
    // await AsyncStorage.clear()
    let token = await AsyncStorage.getItem("token")
    console.log("put mm", token);
    return token
}
function Routes() {
    const context = React.useContext(Context)
    const [isLoggedIn, setIsLoggedIn] = React.useState("")
    
    React.useEffect(() => {
        const myToken = (async () => await  getToken()
        .then(result => {
            setIsLoggedIn(result)
            // console.log("tokenss", result);
        }))()
        return () => {
            console.log("This w ill be logged on unmount");
        }
    }, [context.state.token])

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <MainFlow.Navigator>
                    <MainFlow.Screen name="TrackListFlow" component={TrackListFlowScreen} />
                    <MainFlow.Screen name="TrackCreate" component={TrackCreateScreen} />
                    <MainFlow.Screen name="Account" component={AccountScreen} />
                    {console.log(">inside2 ", isLoggedIn)}
                </MainFlow.Navigator>

            ) :
                (
                    <Stack.Navigator>
                        <Stack.Screen name="SignUp" component={SignUpScreen} options={{
                            header: () => null
                        }} />
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        {/* {console.log(">inside2 ", isLoggedIn)} */}

                        {/* <Stack.Screen name="LoginFlow" component={LoginFlowScreen} /> */}
                    </Stack.Navigator>
                )
            }
        </NavigationContainer>
    );
}

export default Routes;