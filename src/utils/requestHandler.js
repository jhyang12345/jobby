import axios from 'axios'

import { apiEndPoint } from "./apiEndPoint";

async function dummyFunction() {
    return new Promise(
        (res, rej) => {
            setTimeout(
                res,
                1000
            )
        }
    )

}

export async function getParsedResult(text) {
    return dummyFunction()
}

export async function getWikiTable(text) {
    const url = apiEndPoint + "/create_wiki"
    console.log("Text passed", text)
    const data = {
        "params": {},
        "body": text
    }
    const headers = {
        'Access-Control-Allow-Origin': true,
        'Content-Type': 'application/json'
    }
    const response = await axios.post(url, data, {headers})
    return response.data
}

export async function getRdsToHiveCreate(text) {
    const url = apiEndPoint + "/rds_to_hive/create"
    console.log("Text passed", text)
    const data = {
        "params": {},
        "body": text
    }
    const headers = {
        'Access-Control-Allow-Origin': true,
        'Content-Type': 'application/json'
    }
    const response = await axios.post(url, data, {headers})
    return response.data
}

export async function getRdsToHiveSelect(text) {
    const url = apiEndPoint + "/rds_to_hive/select"
    console.log("Text passed", text)
    const data = {
        "params": {},
        "body": text
    }
    const headers = {
        'Access-Control-Allow-Origin': true,
        'Content-Type': 'application/json'
    }
    const response = await axios.post(url, data, {headers})
    return response.data
}