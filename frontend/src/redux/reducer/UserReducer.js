import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constans/UserConstans"

export const userReducer = (
    state = { user: [] },
    { type, payload }
) => {
    switch (type) {
        case USER_REGISTER_REQUEST: return {...state,loading: true}
        case USER_REGISTER_SUCCESS: return {...state, registered: true,loading: false}
        case USER_REGISTER_FAIL: return {...state,error: payload,loading: false}

        case USER_LOGIN_REQUEST: return {...state,loading: true}
        case USER_LOGIN_SUCCESS: return {...state,loading: false,login: payload}
        case USER_LOGIN_FAIL: return {...state, loading: false,error: payload }


        default: return state
    }
} 