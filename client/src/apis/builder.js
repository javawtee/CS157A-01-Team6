import { format } from "date-fns";

export const flight = {
    getSearchFlightCall: payload => {
        let { isRoundTrip, searchInputs, dateInputs, maxPrice, numOfPassengers, sortById, flightClassId, departTimeId, arriveTimeId } = payload
        let fromDate = format(dateInputs.fromDate, "yyyy/MM/dd")
        let reqConditions = ""
        // roundtrip?
        reqConditions += `roundtrip=${isRoundTrip ? "y" : "n"}&`
        // from and to flights
        reqConditions += `depart=${searchInputs.flightFrom}|${fromDate}|${departTimeId}&arrive=${searchInputs.flightTo}`
        if (isRoundTrip) {
            let toDate = format(dateInputs.toDate, "yyyy/MM/dd")
            reqConditions += `|${toDate}|${arriveTimeId}`
        }
        reqConditions += `&fclass=${flightClassId}&max=${maxPrice}&passengers=${numOfPassengers}&sort=${sortById}`
        return reqConditions
    },
}