import { combineReducers} from "redux"
import rdsToHiveCreate from "./RdsToHiveCreate";
import transformCreateToWiki from "./WikiTable";

export default combineReducers({
    transformRDSToHiveCreate: rdsToHiveCreate,
    transformCreateToWiki,
})