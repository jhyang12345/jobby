import { getRdsToHiveCreate } from "../utils/requestHandler"

let defaultState = {
    fromText: "",
    toText: "",
    pending: false,
    succeeded: false, // only matters if translationComplete is true
    updating: true,
}

const UPDATE_FROM_TEXT_RDS_TO_HIVE_CREATE = "UPDATE_FROM_TEXT_RDS_TO_HIVE_CREATE"

export function setFromText(text) {
    return {
        type: UPDATE_FROM_TEXT_RDS_TO_HIVE_CREATE,
        text,
    }
}

export function handleSetFromText(text) {
    return (dispatch) => {
        dispatch(setUpdating(true))
        dispatch(setFromText(text))
    }
}

const UPDATE_TO_TEXT_RDS_TO_HIVE_CREATE = "UPDATE_TO_TEXT_RDS_TO_HIVE_CREATE"

export function setToText(text) {
    return {
        type: UPDATE_TO_TEXT_RDS_TO_HIVE_CREATE,
        text,
    }
}

export function handleSetToText(text) {
    return (dispatch) => {
        dispatch(setUpdating(true))
        dispatch(setToText(text))
    }
}

const SET_PENDING_RDS_TO_HIVE_CREATE = "SET_PENDING_RDS_TO_HIVE_CREATE"

export function setPending(pending) {
    return {
        type: SET_PENDING_RDS_TO_HIVE_CREATE,
        pending
    }
}

const SET_SUCCEEDED_RDS_TO_HIVE_CREATE = "SET_SUCCEEDED_RDS_TO_HIVE_CREATE"

export function setSucceeded(succeeded) {
    return {
        type: SET_SUCCEEDED_RDS_TO_HIVE_CREATE,
        succeeded,
    }
}

const SET_UPDATING_RDS_TO_HIVE_CREATE = "SET_UPDATING_RDS_TO_HIVE_CREATE"

export function setUpdating(updating) {
    return {
        type: SET_UPDATING_RDS_TO_HIVE_CREATE,
        updating
    }
}

export function handleRdsToHiveCreate(text) {
    return (dispatch) => {
        dispatch(setPending(true))

        return getRdsToHiveCreate(text)
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

export default function rdsToHiveCreate(state=defaultState, action) {
    switch (action.type) {
        case UPDATE_FROM_TEXT_RDS_TO_HIVE_CREATE: {
            return {
                ...state,
                fromText: action.text
            }
        }
        case UPDATE_TO_TEXT_RDS_TO_HIVE_CREATE: {
            return {
                ...state,
                toText: action.text
            }
        }
        case SET_PENDING_RDS_TO_HIVE_CREATE: {
            return {
                ...state,
                pending: action.pending
            }
        }
        case SET_SUCCEEDED_RDS_TO_HIVE_CREATE: {
            return {
                ...state,
                succeeded: action.succeeded
            }
        }
        case SET_UPDATING_RDS_TO_HIVE_CREATE: {
            return {
                ...state,
                updating: action.updating,
            }
        }
        default:
            return state
    }
}