import React from 'react';
import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    return async ({ email, password }) => {
        console.log(email, password);
        try {
            const response = await trackerApi.post("/signup", { email, password })
            // console.log(response);
            await AsyncStorage.setItem("token", response.data.token)
            dispatch({type: "signup", payload: response.data.token})
        } catch (err) {
            console.log(err.response.data);
            dispatch({
                type: "add_error",
                payload: "Something went wrong in sign up "
            })
        }
    }
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