import { getParsedResult } from "../utils/requestHandler"


let defaultState = {
    fromText: "",
    toText: "",
    pending: false,
    translationComplete: false,
    succeeded: false, // only matters if translationComplete is true
}

const UPDATE_FROM_TEXT_RDS_HIVE = "UPDATE_FROM_TEXT_RDS_HIVE"

export function setFromText(text) {
    return {
        type: UPDATE_FROM_TEXT_RDS_HIVE,
        text,
    }
}

const UPDATE_TO_TEXT_RDS_HIVE = "UPDATE_TO_TEXT_RDS_HIVE"

export function setToText(text) {
    return {
        type: UPDATE_TO_TEXT_RDS_HIVE,
        text,
    }
}

const SET_PENDING_RDS_HIVE = "SET_PENDING_RDS_HIVE"

export function setPending(pending) {
    return {
        type: SET_PENDING_RDS_HIVE,
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
        case UPDATE_FROM_TEXT_RDS_HIVE: {
            return {
                ...state,
                fromText: action.text
            }
        }
        case UPDATE_TO_TEXT_RDS_HIVE: {
            return {
                ...state,
                toText: action.text
            }
        }
        case SET_PENDING_RDS_HIVE: {
            return {
                ...state,
                pending: action.pending
            }
        }
        default:
            return state
    }
}