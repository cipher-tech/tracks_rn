// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignUpScreen from './src/screens/signUpScreen';
import SignInScreen from './src/screens/signInScreen';
import TrackListScreen from './src/screens/trackListScreen';
import TrackDetailScreen from './src/screens/trackDetailScreen';
import TrackCreateScreen from './src/screens/trackCreateScreen';
import AccountScreen from './src/screens/accountScreen';
import { Context, Provider as AuthProvider } from "./src/context/authContext"
import { Provider as LocationProvider } from "./src/context/locationContext"
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


function App() {
    return (
        <LocationProvider >
            <AuthProvider>
                <SafeAreaProvider>

                    <NavigationContainer>
                        {/* <Stack.Navigator> */}
                        <Stack.Screen initialRouteName="SignUp" name="SignUp" component={SignUpScreen} options={{
                            header: () => null,
                        }} />
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        {/* <Stack.Screen name="LoginFlow" component={LoginFlowScreen} /> */}
                        {/* </Stack.Navigator> */}
                        <MainFlow.Navigator>
                            <MainFlow.Screen name="TrackListFlow" component={TrackListFlowScreen} />
                            <MainFlow.Screen name="TrackCreate" component={TrackCreateScreen} />
                            <MainFlow.Screen name="Account" component={AccountScreen} />
                        </MainFlow.Navigator>

                    </NavigationContainer>
                </SafeAreaProvider>
            </AuthProvider>

        </LocationProvider>

    );
}

export default App;