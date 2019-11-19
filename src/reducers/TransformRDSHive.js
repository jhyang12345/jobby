let defaultState = {
    fromText: "",
    toText: "",
    pending: false,
    translationComplete: false,
    succeeded: false, // only matters if translationComplete is true
}



export default function transformRDSHive(state=defaultState, action) {
    switch (action.type) {

        default:
            return state
    }
}