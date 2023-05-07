import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constans/UserConstans"
import axios from "axios";

export const registerUserAction = userData => async dispatch => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })
        const { data } = await axios.post("http://localhost:5000/singUp", userData)
        dispatch({ type: USER_REGISTER_SUCCESS })
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
    }
}

export const userLoginAction = (loginData) => async dispatch => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const { data } = await axios.get("http://localhost:5000/singUp")
        
        const result = data.find(item => item.email == loginData.email && item.password === loginData.password)
        
        if (!result) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: "Invalid Email Or Password"
            }) 
            return
        }
        localStorage.setItem("auth", JSON.stringify(result)) 
        // localStorage.setItem("sakshu","SAKSHIII" )
        dispatch({ type: USER_LOGIN_SUCCESS, payload: result })
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.message })
    }
}
