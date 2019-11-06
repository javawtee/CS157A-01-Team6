import React, { useState } from "react";
import Autocomplete from 'react-autocomplete'
import DatePicker from 'react-date-picker';
import airports from "../Test/airports";

export default function SearchField() {
  const [tripType, setTripType] = useState({ roundtrip: true })
  const [searchInputs, setSearchInputs] = useState({ flightFrom: '', flightTo: '' });
  const [dateInputs, setDateInputs] = useState({ fromDate: new Date(), toDate: new Date() })

  const handleInputChange = e => setSearchInputs({ ...searchInputs, [e.target.name]: e.target.value })

  const handleFromDateChange = date => setDateInputs({ ...dateInputs, fromDate: date })

  const handleToDateChange = date => setDateInputs({ ...dateInputs, toDate: date })

  const handleTripType = e => setTripType({ roundtrip: (e.target.id !== "") })

  const handleSubmit = e => {
    e.preventDefault()
    console.log(searchInputs)
  }

  return (
    <form
      className="m-2 uk-card uk-card-default uk-card-body uk-grid-small uk-width-1-2@s" uk-grid=""
      onSubmit={handleSubmit}
    >
      <div className="uk-card-header"><h4>Book a Flight</h4></div>
      <div className="uk-width-1-1@s" uk-grid="">
        <label><input className="uk-radio" type="radio" id="roundtrip" name="trip-type" defaultChecked="true" onChange={handleTripType} /> Roundtrip</label>
        <label><input className="uk-radio" type="radio" name="trip-type" onChange={handleTripType} /> One-way</label>
      </div>
      <div className="mt-3 uk-width-1-1@s" uk-grid="">
        <div className="uk-width-1-2@s">
          Flight From
          <Autocomplete
            getItemValue={item => item.label}
            items={airports}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.id}>
                {item.label}
              </div>
            }
            value={searchInputs.flightFrom}
            onChange={e => handleInputChange({ target: { name: "flightFrom", value: (searchInputs.flightFrom + e.target.value) } })}
            onSelect={value => handleInputChange({ target: { name: "flightFrom", value } })}
          />
          {/* <input className="uk-input" type="text" name="flightFrom" value={searchInputs.flightFrom} onChange={handleInputChange} /> */}
        </div>
        <div className="uk-width-1-2@s">
          Depart Date
          <DatePicker format="MM/dd" clearIcon={null} calendarIcon={null} minDate={new Date()}
            value={dateInputs.fromDate} onChange={handleFromDateChange} />
        </div>
      </div>
      <div className="uk-width-1-1@s" uk-grid="">
        <div className="uk-width-1-2@s">
          Flight To
          <input className="uk-input" type="text" name="flightTo" value={searchInputs.flightTo} onChange={handleInputChange} />
        </div>
        <div className="uk-width-1-2@s">
          Expected Arrive Date
          <DatePicker format="MM/dd" clearIcon={null} calendarIcon={null} minDate={new Date()} disabled={!tripType.roundtrip}
            value={dateInputs.toDate} onChange={handleToDateChange} />
        </div>
      </div>
      <ul className="uk-width-1-1@s" uk-grid="" uk-accordion="">
        <li className="uk-width-1-1@s">
          <a className="uk-margin-medium-top uk-accordion-title uk-text-small uk-text-bold" href="#adv-option">Advanced Options</a>
          <div className="uk-accordion-content">
            <div className="uk-width-1-2@s">
              <small>Flight time</small>
              <select className="uk-select uk-form-small">
                <option>All day</option>
                <option>Before noon</option>
                <option>Noon - 6pm</option>
                <option>After 6pm</option>
              </select>
            </div>
            <div className="uk-margin-small-top uk-width-1-2@s">
              <small>Flight class</small>
              <select className="uk-select uk-form-small">
                <option>Economy</option>
                <option>Business</option>
              </select>
            </div>
            <div className="uk-margin-small-top uk-width-1-2@s">
              <small>Max price: TODO Add price value here </small>
              <input className="uk-range" type="range" min="50" max="2000" step="50" />
            </div>
          </div>
        </li>
      </ul>
      <div className="uk-width-1-1@s uk-card-footer uk-flex uk-flex-right">
        <button className="uk-button uk-button-primary">Apply</button>
      </div>
    </form>
  );
}
