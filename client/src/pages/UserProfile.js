import React, { Component } from 'react'

//Get it from database
const userInfo = {
    user_id = "123456",
    email = "email@email.com",
    password = "123456",
    joined_dateTime = "03-10-2019",
    firstName = "First Name",
    middle_Initial = "middle init",
    lastName = "Last Name",
    userDOB = "DOB",
    address = "123456"
}

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = userInfo
    }

    handleOnFocus = e => {
        if(e.target.id === "password") this.setState({password: ""})
    }

    handleChange = e => {
        let removedWarnFrom = `valid${e.target.id}`
        this.setState({ [e.target.name]: e.target.value, [removedWarnFrom]: true })
    }

    clearForm = e => this.setState(initialState)

    handleSubmit = e => {
        e.preventDefault()
        let validfirstName = this.state.firstName.length > 1
        let validlastName = this.state.lastName.length > 1
        let validmiddleInitial = this.state.middleInitial.length === 0 || (this.state.middleInitial.length > 0 && isNaN(this.state.middleInitial))
        let validsignupEmail = this.state.signupEmail.length > 0 && validateEmailFormat(this.state.signupEmail)
        let validconfirmEmail = this.state.confirmEmail.length > 0 && this.state.confirmEmail === this.state.signupEmail
        let validsignupPassword = this.state.signupPassword.length > 5 && validateStrongPassword(this.state.signupPassword)
        let validconfirmPassword = this.state.confirmPassword.length > 5 && this.state.confirmPassword === this.state.signupPassword
        if (!validfirstName || !validlastName || !validmiddleInitial || !validsignupEmail || !validconfirmEmail || !validsignupPassword || !validconfirmPassword) {
            return this.setState({ 
                validfirstName, validlastName, validmiddleInitial, 
                validsignupEmail, validconfirmEmail, validsignupPassword, 
                validconfirmPassword 
            })
        }

        // TODO: call API
        alert("blabla")
    }

    render() {
        return (
        <div className="uk-child-width-expand@s" uk-grid>
        <div>
            <ul className="uk-list uk-list-striped">
                <li>First Name: </li>
                <li>Last Name: </li>
                <li>middle_Initial: </li>
                <li>Email: </li>
                <li>DOB: </li>
            </ul>
        </div>
        </div>
        )
    }
}


export default UserProfile