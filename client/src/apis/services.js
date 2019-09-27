import urls from "./urls"

import axios from "axios"

const services = {
    // background
    signedIn: () => { return axios.get(urls.user.signedin) },

    
    // user
    signIn: coin => { return axios.post(urls.user.signin, { userId: coin.userId, password: coin.password }) },
    signOut: () => { return axios.get(urls.user.signout) }
}

export default services 