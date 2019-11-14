import { format } from "date-fns";

export const flight = {
    getSearchFlightCall: payload => {
        let { isRoundTrip, searchInputs, dateInputs, maxPrice, numOfPassengers, sortByInput, flightClassInput, flightTimeInputs } = payload
        let fromDate = format(dateInputs.fromDate, "yyyy/MM/dd")
        let reqConditions = ""
        // for depart flight
        reqConditions += `depart=${searchInputs.flightFrom}|${fromDate}|${flightTimeInputs.fromOption.id}&`
        if (isRoundTrip) {
            let toDate = format(dateInputs.toDate, "yyyy/MM/dd")
            reqConditions += `return=${searchInputs.flightTo}|${toDate}|${flightTimeInputs.toOption.id}&`
        }
        reqConditions += `fclass=${flightClassInput.id}&max=${maxPrice}&passengers=${numOfPassengers}&sort=${sortByInput.id}`
        return reqConditions
    }
}