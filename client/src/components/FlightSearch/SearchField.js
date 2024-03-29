import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { isAfter } from 'date-fns';
import Autocomplete from '../Autocomplete';

import converter from "utils/converter";
import { generateOptions } from 'utils/generators';
import flightTimeOptions from 'models/flightTimeOptions';
import flightClassOptions from 'models/flightClassOptions';
import sortByOptions from 'models/sortByOptions';

export default function SearchField(props) {
  const dispatch = useDispatch()

  const { airportList } = useSelector(state => ({
    airportList: state.airport.list
  }))

  const { departTime, arriveTime, flightClass, maxPrice, sortBy, DEFAULT_MAX_PRICE } =
    useSelector(state => ({
      departTime: state.user.preference.departTime,
      arriveTime: state.user.preference.arriveTime,
      flightClass: state.user.preference.flightClass,
      maxPrice: state.user.preference.maxPrice,
      sortBy: state.user.preference.sortBy,
      DEFAULT_MAX_PRICE: state.user.DEFAULT_MAX_PRICE,
    }))

  const [tripType, setTripType] = useState({ roundtrip: true })
  const [searchInputs, setSearchInputs] = useState({ flightFrom: '', flightTo: '' });
  const [dateInputs, setDateInputs] = useState({ fromDate: new Date(), toDate: new Date() })
  const [flightTimeInputs, setFlightTimeInputs] = useState({ fromOption: departTime, toOption: arriveTime })
  const [numOfPassengers, setNumOfPassengers] = useState(1)
  const [flightClassInput, setFlightClassInput] = useState(flightClass)
  const [maxPriceInput, setMaxPrice] = useState(+maxPrice)
  const [sortByInput, setSortByInput] = useState(sortBy)

  const [validSearchInputs, validateSearchInputs] = useState({ flightFrom: true, flightTo: true })

  useEffect(() => {
    // minDate of ToDate-DatePicker can't be before selected fromDate
    if (isAfter(dateInputs.fromDate, dateInputs.toDate)) {
      setDateInputs({ ...dateInputs, toDate: dateInputs.fromDate })
    }
  }, [dateInputs])

  const handleTripType = e => setTripType({ roundtrip: (e.target.id !== '') })

  const handleFromDateChange = date => setDateInputs({ ...dateInputs, fromDate: date })

  const handleToDateChange = date => setDateInputs({ ...dateInputs, toDate: date })

  const handleSelectFlightTimeOption = e => setFlightTimeInputs({ ...flightTimeInputs, [e.target.name]: e.target.value })

  const handleSetNumOfPassengers = e => setNumOfPassengers(e.target.value)

  const handleSelectFlightClassOption = e => setFlightClassInput(e.target.value)

  const handleSetMaxPrice = e => setMaxPrice(+e.target.value)

  const handleSelectSortByOption = e => setSortByInput(e.target.value)

  const handleOnChangeAutoComplete = e => {
    validateSearchInputs({ ...validSearchInputs, [e.target.name]: true })
    setSearchInputs({ ...searchInputs, [e.target.name]: e.target.value })
  }

  const handleOnFocusAutoComplete = e => {
    validateSearchInputs({ ...validSearchInputs, [e.target.name]: true })
    setSearchInputs({ ...searchInputs, [e.target.name]: "" })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // validate searchInputs
    let { flightFrom, flightTo } = searchInputs
    let validFlightFrom = flightFrom.length > 0 && airportList.includes(flightFrom)
    let validFlightTo = flightTo.length > 0 && airportList.includes(flightTo)
    if (!validFlightFrom || !validFlightTo) {
      return validateSearchInputs({ flightFrom: validFlightFrom, flightTo: validFlightTo })
    }

    // // get airport code only
    const extractAirportCode = airport => {
      return airport.split(',')[1].trim().substring(0, 3)
    }

    dispatch({
      type: "BOOKING_APPLY_SEARCH",
      inputs: {
        isRoundTrip: tripType.roundtrip,
        searchInputs: {
          flightFrom: extractAirportCode(flightFrom),
          flightTo: extractAirportCode(flightTo),
        },
        maxPrice: maxPriceInput,
        dateInputs,
        departTimeId: converter.optionTextToId(flightTimeOptions, flightTimeInputs.fromOption),
        arriveTimeId: converter.optionTextToId(flightTimeOptions, flightTimeInputs.toOption),
        numOfPassengers,
        flightClassId: converter.optionTextToId(flightClassOptions, flightClassInput),
        sortById: converter.optionTextToId(sortByOptions, sortByInput),
      }
    })
  }

  return (
    <form
      className='uk-margin-auto uk-margin-small-top uk-card uk-card-default uk-card-small uk-card-body uk-grid-small uk-width-1-2@l' uk-grid=''
      onSubmit={handleSubmit}
    >
      <div className='uk-card-header'><h4>Book a Flight</h4></div>
      <div className='uk-width-1-1@s' uk-grid=''>
        <div className='uk-width-1-2@s' style={{ paddingTop: 26 }}>
          <label><input className='uk-radio' type='radio' id='roundtrip' name='trip-type' defaultChecked='true' onChange={handleTripType} /> Roundtrip</label>
          &nbsp;&nbsp;
          <label><input className='uk-radio' type='radio' name='trip-type' onChange={handleTripType} /> One-way</label>
        </div>
        <div className='uk-width-1-3@s'>
          <div className='uk-width-1-2 uk-width-1-2@s'>
            <small>Passengers</small>
            <input className="uk-input uk-form-small" type="number" min="1"
              // input number doesn't work on Mobile view
              // onKeyPress={e => e.preventDefault()}
              // onKeyDown={e => e.preventDefault()}
              value={numOfPassengers}
              onChange={handleSetNumOfPassengers}
            />
          </div>
        </div>
      </div>
      <div className='uk-width-1-1@s' uk-grid=''>
        <div className='uk-width-1-2@s'>
          <small>Flight From</small>
          <Autocomplete
            className={`uk-input uk-form-small ${validSearchInputs.flightFrom ? "" : "uk-form-danger"}`}
            name="flightFrom"
            data={airportList}
            value={searchInputs.flightFrom}
            onChange={handleOnChangeAutoComplete}
            onFocus={handleOnFocusAutoComplete}
          />
          <small style={{ color: "red", display: validSearchInputs.flightFrom ? "none" : "" }}>
            Invalid. Please select a suggestion
          </small>
          {/* <input className='uk-input' type='text' name='flightFrom' value={searchInputs.flightFrom} onChange={handleInputChange} /> */}
        </div>
        <div className='uk-width-1-3 uk-width-1-5@s'>
          <small>Depart Date</small>
          <DatePicker className='uk-input uk-form-small' dateFormat='MM/dd'
            minDate={new Date()} selected={dateInputs.fromDate} onChange={handleFromDateChange} />
        </div>
        <div className='uk-width-1-4@s'>
          <small>Depart time</small>
          {generateOptions('uk-select uk-form-small', handleSelectFlightTimeOption,
            flightTimeInputs.fromOption, flightTimeOptions, { name: "fromOption" })}
        </div>
      </div>
      <div className='uk-width-1-1@s' uk-grid=''>
        <div className='uk-width-1-2@s'>
          <small>Flight To</small>
          <Autocomplete
            className={`uk-input uk-form-small ${validSearchInputs.flightTo ? "" : "uk-form-danger"}`}
            name="flightTo"
            data={airportList}
            value={searchInputs.flightTo}
            onChange={handleOnChangeAutoComplete}
            onFocus={handleOnFocusAutoComplete}
          />
          <small style={{ color: "red", display: validSearchInputs.flightTo ? "none" : "" }}>
            Invalid. Please select a suggestion
          </small>
        </div>
        <div className='uk-width-1-3 uk-width-1-5@s'>
          <small>Return Date</small>
          <DatePicker className='uk-input uk-form-small' dateFormat='MM/dd'
            minDate={dateInputs.fromDate} selected={dateInputs.toDate} onChange={handleToDateChange} disabled={!tripType.roundtrip} />
        </div>
        <div className='uk-width-1-4@s'>
          <small>Return time</small>
          {generateOptions('uk-select uk-form-small', handleSelectFlightTimeOption,
            flightTimeInputs.toOption, flightTimeOptions, { name: "toOption", disabled: !tripType.roundtrip })}
        </div>
      </div>
      <ul className='uk-width-1-1@s' uk-grid='' uk-accordion=''>
        <li className='uk-width-1-1@s'>
          <a className='uk-accordion-title uk-text-small uk-text-bold' href='#adv-option'>Advanced Options</a>
          <div className='uk-accordion-content' uk-grid="">
            <div className='uk-margin-small-top uk-width-1-3@s'>
              <small>Flight class</small>
              {generateOptions('uk-select uk-form-small', handleSelectFlightClassOption, flightClassInput, flightClassOptions)}
            </div>
            <div className='uk-margin-small-top uk-width-1-3@s'>
              <small>Max price: {maxPriceInput === DEFAULT_MAX_PRICE ? "Any" : maxPriceInput} </small>
              <input className='uk-range' type='range' min='50' max={DEFAULT_MAX_PRICE} step='50' value={maxPriceInput} onChange={handleSetMaxPrice} />
            </div>
            <div className='uk-margin-small-top uk-width-1-3@s'>
              <small>Sort by</small>
              {generateOptions('uk-select uk-form-small', handleSelectSortByOption, sortByInput, sortByOptions)}
            </div>
          </div>
        </li>
      </ul>
      <div className='uk-width-1-1@s uk-card-footer uk-flex uk-flex-right'>
        <button className='uk-button uk-button-primary' type="submit">Apply</button>
      </div>
    </form>
  );
}
