import React from 'react';
import { useSelector } from "react-redux";
import { format } from 'date-fns';

export default function UserInfo() {
    const { firstName, lastName, middleInitial, email, joinedDate } = useSelector(state => ({
        firstName: state.user.info.firstName,
        lastName: state.user.info.lastName,
        middleInitial: state.user.info.middleInitial,
        email: state.user.info.email,
        joinedDate: state.user.info.joinedDate,
    }))
    return (
        <li className='uk-width-1-1'>
            <a className='uk-accordion-title uk-text-small uk-text-bold' href='#information'>
                <h4>User Basic Information</h4>
            </a>
            <div className='uk-accordion-content' uk-grid="">
                <div className="uk-width-1-1" uk-grid="">
                    <div className="uk-margin-small-left uk-padding-remove uk-width-1-4@s">
                        <small>First Name</small>
                        <div>{firstName}</div>
                    </div>
                    <div className="uk-margin-small-left uk-padding-remove uk-width-1-4@s">
                        <small>Last Name</small>
                        <div>{lastName}</div>
                    </div>
                    <div className="uk-margin-small-left uk-padding-remove uk-width-1-4@s">
                        <small>Middle Initial</small>
                        <div>{middleInitial}</div>
                    </div>
                </div>
                <div className="uk-width-1-1" uk-grid="">
                    <div className="uk-margin-small-left uk-padding-remove uk-width-1-4@s">
                        <small>Email</small>
                        <div>{email}</div>
                    </div>
                    <div className="uk-margin-small-left uk-padding-remove uk-width-1-4@s">
                        <small>Joined date</small>
                        <div>{format(new Date(joinedDate), "iiii MMM dd, yyyy HH:mm:ss")}</div>
                    </div>
                </div>
            </div>
        </li>
    )
}

