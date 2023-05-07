import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducer/UserReducer";
import { slotsReducer } from "./reducer/SlotsReducers";
// const localdata = JSON.parse(localStorage.getItem("auth"))

const rootReducer = combineReducers({
    allUsers: userReducer,
    allSlots: slotsReducer

})
const reduxStore = createStore(
    rootReducer,
    { 
    //      allUsers:{
    //    login: localdata,
    //    reduxContacts:[]
    //     }
    },
    composeWithDevTools(applyMiddleware(thunk))
)
export default reduxStore