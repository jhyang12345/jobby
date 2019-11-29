import axios from 'axios'

export const apiEndPoint = 'http://localhost:8000'

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