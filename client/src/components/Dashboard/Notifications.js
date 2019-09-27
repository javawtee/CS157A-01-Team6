import React from 'react'

const Notifications = props => {  
    return (

        
        <div>
                <dl class="uk-description-list uk-description-list-divider">
                    <dt>Description term</dt>
                    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
                    <dt>Description term</dt>
                    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
                <dt>Description term</dt>
                    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
                </dl>

            Hello from {props.hello || 'Notifications'}
        </div>
    )
}

export default Notifications