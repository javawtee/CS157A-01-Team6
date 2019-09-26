import React from 'react'

const NavBar = props => {
    return (
        <React.Fragment>
            <nav className="uk-navbar-container" uk-navbar>

                <div className="uk-navbar-left">

                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href="#">Welcome</a></li>
                        <li>
                            <a href="#">Profile</a>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li className="uk-active"><a href="#">Active</a></li>
                                    <li><a href="#">Profile</a></li>
                                </ul>
                            </div>

                            <a href="#">Search</a>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li className="uk-active"><a href="#">Active</a></li>
                                    <li><a href="#">Search</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Sign Out</a></li>
                    </ul>

                </div>

            </nav>
            {props.content}
            <button onClick={() => alert('abc')}>ABC</button>
        </React.Fragment>
    )
}

export default NavBar
