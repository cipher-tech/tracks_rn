// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpScreen from './src/screens/signUpScreen';
import SignInScreen from './src/screens/signInScreen';
import TrackListScreen from './src/screens/trackListScreen';
import TrackDetailScreen from './src/screens/trackDetailScreen';
import TrackCreateScreen from './src/screens/trackCreateScreen';
import AccountScreen from './src/screens/accountScreen';
import { Provider as AuthProvider } from "./src/context/authContext"
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
    let isLoggedIn = !false
    return (
        <AuthProvider>
            <NavigationContainer>
                {isLoggedIn ? (
                    <Stack.Navigator>
                        <Stack.Screen name="SignUp" component={SignUpScreen} options={{
                            header: () => null
                        }} />
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        {/* <Stack.Screen name="LoginFlow" component={LoginFlowScreen} /> */}
                    </Stack.Navigator>
                ) :
                    (
                        <MainFlow.Navigator>
                            <MainFlow.Screen name="TrackListFlow" component={TrackListFlowScreen} />
                            <MainFlow.Screen name="TrackCreate" component={TrackCreateScreen} />
                            <MainFlow.Screen name="Account" component={AccountScreen} />
                        </MainFlow.Navigator>
                    )
                }
            </NavigationContainer>
        </AuthProvider>
    );
}

export default App;