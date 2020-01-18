import axios from "axios";

const baseUrl = process.env.NODE_ENV == "development"?'/dev/api/mxc/admin':'/api/mxc/admin'

export default (config) => {
    return axios({
        method: config.method,
        url: baseUrl + config.url,
        data: config.data,
        params: config.params,
        responseType: 'blob'
    })
}
