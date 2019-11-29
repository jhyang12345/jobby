import { getWikiTable } from "../utils/requestHandler"


let defaultState = {
    fromText: "",
    toText: "",
    pending: false,
    translationComplete: false,
    succeeded: false, // only matters if translationComplete is true
}

const UPDATE_FROM_TEXT_WIKI_TABLE = "UPDATE_FROM_TEXT_WIKI_TABLE"

export function setFromText(text) {
    return {
        type: UPDATE_FROM_TEXT_WIKI_TABLE,
        text,
    }
}

const UPDATE_TO_TEXT_WIKI_TABLE = "UPDATE_TO_TEXT_WIKI_TABLE"

export function setToText(text) {
    return {
        type: UPDATE_TO_TEXT_WIKI_TABLE,
        text,
    }
}

const SET_PENDING_WIKI_TABLE = "SET_PENDING_WIKI_TABLE"

export function setPending(pending) {
    return {
        type: SET_PENDING_WIKI_TABLE,
        pending
    }
}

export function handlePrestoWikiTable(text) {
    return (dispatch) => {
        dispatch(setPending(true))
        return getWikiTable(text)
            .then(result => {
                const { body } = result
                dispatch(setToText(body))
                dispatch(setPending(false))
            })
    }
}

export default function transformCreateToWiki(state=defaultState, action) {
    switch (action.type) {
        case UPDATE_FROM_TEXT_WIKI_TABLE: {
            return {
                ...state,
                fromText: action.text
            }
        }
        case UPDATE_TO_TEXT_WIKI_TABLE: {
            return {
                ...state,
                toText: action.text
            }
        }
        case SET_PENDING_WIKI_TABLE: {
            return {
                ...state,
                pending: action.pending
            }
        }
        default:
            return state
    }
}