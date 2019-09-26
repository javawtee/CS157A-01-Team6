import urls from "./urls"

import axios from "axios"

const user = {
    authenticate: coin => { return axios.post(urls.user.auth, {userId: coin.userId, password: coin.password} )}
}

export default user