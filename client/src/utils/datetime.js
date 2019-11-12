import React from 'react'
import { format, parse, differenceInHours } from 'date-fns'

export function getTimeIn12HourFormat(timeString) {
    const time = parse(timeString, "HH:mm", new Date())
    return (
        <React.Fragment>
            <span className="uk-text-large uk-text-bold uk-margin-small-right">{format(time, "hh:mm")}</span>
            <small>{format(time, "a")}</small>
        </React.Fragment>
    )
}

export function calcDuration(depTimeString, arrTimeString) {
    const arrTime = parse(arrTimeString, "HH:mm", new Date())
    const depTime = parse(depTimeString, "HH:mm", new Date())
    const diffHours = differenceInHours(arrTime, depTime)
    var diffMinutes = arrTime.getMinutes() - depTime.getMinutes()
    diffMinutes = diffMinutes < 0 ? -diffMinutes : diffMinutes
    //return `${diffHours} hour${diffHours > 1 ? "s" : ""} ${diffMinutes > 0 ? `and ${diffMinutes} minute${diffMinutes > 1 ? "s" : ""}` : ""} `
    return `${diffHours}h ${diffMinutes}m`
}