import { getRdsToHiveCreate } from "../utils/requestHandler"

let defaultState = {
    fromText: "",
    toText: "",
    pending: false,
    succeeded: false, // only matters if translationComplete is true
    updating: true,
}

const UPDATE_FROM_TEXT = "UPDATE_FROM_TEXT"

export function setFromText(text) {
    return {
        type: UPDATE_FROM_TEXT,
        text,
    }
}

export function handleSetFromText(text) {
    return (dispatch) => {
        dispatch(setUpdating(true))
        dispatch(setFromText(text))
    }
}

const UPDATE_TO_TEXT = "UPDATE_TO_TEXT"

export function setToText(text) {
    return {
        type: UPDATE_TO_TEXT,
        text,
    }
}

export function handleSetToText(text) {
    return (dispatch) => {
        dispatch(setUpdating(true))
        dispatch(setToText(text))
    }
}

const SET_PENDING = "SET_PENDING"

export function setPending(pending) {
    return {
        type: SET_PENDING,
        pending
    }
}

const SET_SUCCEEDED = "SET_SUCCEEDED"

export function setSucceeded(succeeded) {
    return {
        type: SET_SUCCEEDED,
        succeeded,
    }
}

const SET_UPDATING = "SET_UPDATING"

export function setUpdating(updating) {
    return {
        type: SET_UPDATING,
        updating
    }
}

export function handleFetchFunction(text, requestFunction) {
    return (dispatch) => {
        dispatch(setPending(true))

        return requestFunction(text)
            .then(result => {
                console.log("Response: ", result)
                const { body, flag } = result
                dispatch(setToText(body))
                dispatch(setPending(false))
                dispatch(setUpdating(false))
                dispatch(setSucceeded(flag))
            })
    }
}

function addFormattedSuffix(action, suffix) {
    return `${action}@${suffix}`
}

export default function generateConverterStore(state=defaultState, actionSuffix) {
    return (state, action) => {
        switch (action.type) {
            case addFormattedSuffix(UPDATE_FROM_TEXT, actionSuffix): {
                return {
                    ...state,
                    fromText: action.text
                }
            }
            case addFormattedSuffix(UPDATE_TO_TEXT, actionSuffix): {
                return {
                    ...state,
                    toText: action.text
                }
            }
            case addFormattedSuffix(SET_PENDING, actionSuffix): {
                return {
                    ...state,
                    pending: action.pending
                }
            }
            case addFormattedSuffix(SET_SUCCEEDED, actionSuffix): {
                return {
                    ...state,
                    succeeded: action.succeeded
                }
            }
            case addFormattedSuffix(SET_UPDATING, actionSuffix): {
                return {
                    ...state,
                    updating: action.updating,
                }
            }
            default:
                return state
        }
    }

}