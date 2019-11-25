let defaultState = {
    fromText: "",
    toText: "",
    pending: false,
    translationComplete: false,
    succeeded: false, // only matters if translationComplete is true
}

const UPDATE_FROM_TEXT = "UPDATE_FROM_TEXT"

function setFromText(text) {
    return {
        type: UPDATE_FROM_TEXT,
        text,
    }
}

const UPDATE_TO_TEXT = "UPDATE_TO_TEXT"

function setToText(text) {
    return {
        type: UPDATE_TO_TEXT,
        text,
    }
}

export function handleRDSToHiveCreate() {

}

export default function transformRDSHive(state=defaultState, action) {
    switch (action.type) {

        default:
            return state
    }
}