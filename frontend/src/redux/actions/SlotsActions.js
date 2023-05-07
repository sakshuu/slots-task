import axios from "axios"
import { BOOKED_SLOT_FAIL, BOOKED_SLOT_REQUEST, BOOKED_SLOT_SUCCESS, SLOTS_GET_FAIL, SLOTS_GET_REQUEST, SLOTS_GET_SUCCESS } from "../constans/SlotsConstans"

export const getSlotsAction = () => async dispatch => {
    try {
        dispatch({ type: SLOTS_GET_REQUEST })
        const { data } = await axios.get("http://localhost:5000/slots")
        dispatch({ type: SLOTS_GET_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SLOTS_GET_FAIL, payload: error.message })
    }
}

export const addBookedSlotsAction = (slotsData) => async dispatch => {
    try {
        dispatch({ type: BOOKED_SLOT_REQUEST })
        const { data } = await axios.post("http://localhost:5000/booked", slotsData)
        dispatch({ type: BOOKED_SLOT_SUCCESS })
    } catch (error) {
        dispatch({ type: BOOKED_SLOT_FAIL, payload: error.message })
    }
}