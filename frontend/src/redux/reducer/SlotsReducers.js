import { BOOKED_SLOT_FAIL, BOOKED_SLOT_REQUEST, BOOKED_SLOT_SUCCESS, SLOTS_GET_FAIL, SLOTS_GET_REQUEST, SLOTS_GET_SUCCESS } from "../constans/SlotsConstans"

export const slotsReducer = (
    state = { slot: [] },
    { type, payload }
) => {
    switch (type) {
        case SLOTS_GET_REQUEST: return {...state,loading: true }
        case SLOTS_GET_SUCCESS: return {...state,loading: false, slot: payload}
        case SLOTS_GET_FAIL: return {...state,loading: false,error: payload}

        case BOOKED_SLOT_REQUEST: return {...state, loading: true}
        case BOOKED_SLOT_SUCCESS: return {...state, loading: false,BookSlots: true}
        case BOOKED_SLOT_FAIL: return {...state, loading: false,error: payload}

        default: return state
    }
} 