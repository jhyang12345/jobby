import generateConverterStore from './generateConverterStore'

const actionSuffix =  "RDS_TO_HIVE_SELECT"

let defaultState = {
    fromText: "",
    toText: "",
    pending: false,
    succeeded: false, // only matters if translationComplete is true
    updating: true,
}

export default generateConverterStore(defaultState, actionSuffix)