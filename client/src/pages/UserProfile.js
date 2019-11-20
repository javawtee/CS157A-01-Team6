import React from 'react'
import UserInfo from 'components/UserProfile/UserInfo'
import UpdatePassword from 'components/UserProfile/UpdatePassword'
import UserPreference from 'components/UserProfile/UserPreference'

export default function UserProfile() {
    return (
        <ul id="user-profile" className='uk-width-1-1 uk-card uk-card-default uk-margin-auto'
            uk-grid=''
            uk-accordion=''>
            <UserInfo />
            <UpdatePassword />
            <UserPreference />
        </ul >
    )
}
