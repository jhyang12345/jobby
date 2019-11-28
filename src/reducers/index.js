import { combineReducers} from "redux"
import transformRDSHive from "./TransformRDSHive";
import transformCreateToWiki from "./WikiTable";

export default combineReducers({
    transformRDSHive,
    transformCreateToWiki,
})