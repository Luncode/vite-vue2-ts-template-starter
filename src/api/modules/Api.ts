import service from '..'
/**
 * AXIOS MODULE SAMPLE
 */
const DEFAULT_HEADER = {
    'TEST': "TEST"
}

export default {
    getDataList: () => {
        return service({
            method: 'GET',
            url: "urlSample",
            headers: DEFAULT_HEADER
        })
    }
}