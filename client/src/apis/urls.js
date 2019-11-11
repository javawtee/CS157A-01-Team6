const AppRoot = "/"
const userRoot = "/user"

const urls = {
    App: {
        load: `${AppRoot}`,
    },
    user: {
        signedin: `${userRoot}/signedin`,
        signup: `${userRoot}/signup`,
        signin: `${userRoot}/signin`,
        signout: `${userRoot}/signout`
    }
}

export default urls