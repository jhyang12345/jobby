import { getPageDict } from "../utils/requestHandler";

export const SET_PAGE_MODEL = "SET_PAGE_MODEL"

let defaultState = {
    "pageDict": {
        "menus": [
            {
                "title": "RDS To Hive",
                "subMenus": [
                    {
                        "title": "RDS To Hive Create",
                        "url": "rds_to_hive/create",
                        "id": "rds_to_hive_create"
                    },
                    {
                        "title": "RDS To Hive Select",
                        "url": "rds_to_hive/select",
                        "id": "rds_to_hive_select"
                    }
                ]
            },
            {
                "title": "Wiki-Table",
                "url": "create_wiki",
                "id": "wiki_table"
            }
        ]
    },
    "pathMap": {

    }
}

export function setPageModel(pageModel) {
    return {
        type: SET_PAGE_MODEL,
        pageModel,
    }
}

export function handleFetchPageModel() {
    return (dispatch) => {
        return getPageDict()
            .then(result => {
                const { body, flag } = result
                dispatch(setPageModel(body["page_dict"]))
            })
    }
}

const getPathMap = (pageModel) => {
    let stack = [pageModel]

    const pathMap = {

    }

    while (stack.length > 0) {
        const obj = stack.pop()
        if (obj instanceof Array) {
            for (let innerObj of obj) {
                stack.push(innerObj)
            }
        } else if (obj instanceof Object) {
            if (Object.keys(obj).includes("url")) {
                pathMap[obj["url"]] = {
                    "title": obj["title"],
                    "id": obj["id"]
                }
                continue
            }
            for (let key in obj) {
                stack.push(obj[key])
            }
        }
    }
    console.log(pathMap)
    return pathMap
}

export default function pageModelStore(state = defaultState, action) {
    switch (action.type) {
        case SET_PAGE_MODEL: {
            return {
                ...state,
                pageDict: action.pageModel,
                pathMap: getPathMap(action.pageModel),
            }
        }
        default:
            return {
                ...state,
            }
    }

}