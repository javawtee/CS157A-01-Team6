import urls from "./urls"

import axios from "axios"

const services = {
    // background
    signedIn: () => { return axios.get(urls.user.signedin) },


    // user
    signUp: payload => { return axios.post(urls.user.signup, payload) },
    signIn: payload => { return axios.post(urls.user.signin, payload) },
    signOut: () => { return axios.get(urls.user.signout) }
}

export default services 