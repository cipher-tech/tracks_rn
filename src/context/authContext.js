import React from 'react';
import trackerApi from "../../assets/api/tracker";
import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload }
        case "signup":
            return { errorMessage: "", token: action.payload }
        default:
            return state;
    }
}

const signUp = (dispatch) => {
    return   
} 

const signIn = (dispatch) => {
    return ({ email, password }) => {

    }
}
const signOut = (dispatch) => {

}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, signOut, signIn },
    { token: null, errorMessage: "" })