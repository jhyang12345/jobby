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
    }
}

export function setPageModel(pageModel) {
    return {
        type: SET_PAGE_MODEL,
        pageModel,
    }
}

export default function pageModelStore(state = defaultState, action) {
    switch (action.type) {
        case SET_PAGE_MODEL: {
            return {
                ...state,
                pageDict: action.pageModel,
            }
        }
        default:
            return {
                ...state,
            }
    }

}