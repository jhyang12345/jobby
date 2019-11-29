import axios from 'axios'

export const apiEndPoint = 'http://localhost:8080'

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
    const data = {
        params: {},
        body: text,
    }
    const response = await axios.post(url, data)
    return response
}