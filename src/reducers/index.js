import { combineReducers} from "redux"
import rdsToHiveCreate from "./RdsToHiveCreate";
import rdsToHiveSelect from "./RDSToHiveSelect"
import transformCreateToWiki from "./WikiTable";

export default combineReducers({
    transformRDSToHiveSelect: rdsToHiveSelect,
    transformRDSToHiveCreate: rdsToHiveCreate,
    transformCreateToWiki,
})