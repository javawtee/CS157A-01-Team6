const AppRoot = "/"
const userRoot = "/user"

const urls = {
    App: {
        load: `${AppRoot}`,
    },
    user: {
        signedin: `${userRoot}/signedin`,
        signin: `${userRoot}/signin`,
        signout: `${userRoot}/signout`
    }
}

export default urls