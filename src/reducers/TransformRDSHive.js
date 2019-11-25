import { getParsedResult } from "../utils/requestHandler"


let defaultState = {
    fromText: "",
    toText: "",
    pending: false,
    translationComplete: false,
    succeeded: false, // only matters if translationComplete is true
}

const UPDATE_FROM_TEXT = "UPDATE_FROM_TEXT"

export function setFromText(text) {
    return {
        type: UPDATE_FROM_TEXT,
        text,
    }
}

const UPDATE_TO_TEXT = "UPDATE_TO_TEXT"

export function setToText(text) {
    return {
        type: UPDATE_TO_TEXT,
        text,
    }
}

const SET_PENDING = "SET_PENDING"

export function setPending(pending) {
    return {
        type: SET_PENDING,
        pending
    }
}

export function handleRDSToHiveCreate(text) {
    return (dispatch) => {
        dispatch(setPending(true))
        return getParsedResult()
            .then(result => {
                dispatch(setToText("Text Set"))
                dispatch(setPending(false))
            })

    }
}

export default function transformRDSHive(state=defaultState, action) {
    switch (action.type) {
        case UPDATE_FROM_TEXT: {
            return {
                ...state,
                fromText: action.text
            }
        }
        case UPDATE_TO_TEXT: {
            return {
                ...state,
                toText: action.text
            }
        }
        case SET_PENDING: {
            return {
                ...state,
                pending: action.pending
            }
        }
        default:
            return state
    }
}