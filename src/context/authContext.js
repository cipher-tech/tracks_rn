import trackerApi from "../../assets/api/tracker";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const signUp = (dispatch) => {
    return async ({ email, password }) => {
        console.log(email, password);
        try {
            const response = await trackerApi.post("/signup", {email, password})
            console.log(response);
        } catch (err) {
            console.log(err.response.data);
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
    {signUp, signOut, signIn},
    { isSignedIn: false, errorMessage })