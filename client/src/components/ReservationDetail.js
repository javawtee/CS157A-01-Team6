import React, { Component, useState } from 'react'

function Flight({flight, index, removeFlight}){

    return (
        <div className = "flight">
            {flight.text}
        <div>
            <button onClick = {() => removeFlight(index)}>X</button>
        </div>    
        </div>
    )
}

function ReservationForm() {
    const[value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        setValue("")
    };

    return (
        <form onSubmit = {handleSubmit}>
         
        </form>
    )
}

function ReservationDetail(props) {
    const [flights, setFlights] = useState([{

        text : 'Flight id : 001, flight from SJC - SFO, price: $400',
        deleted : false
    },
    { 
        text : 'Flight id : 002, flight from SJC - SFO, price: $450',
        deleted : false
    }
    ]);

    const removeFlight = index => {
        const newFlights = [...flights];
        newFlights[index].deleted = true
        newFlights.splice(index, 1);
        setFlights(newFlights);
    }

    return (
    <React.Fragment>
            <div className = "Reservation">
                <div className = "Reservation-list">
                        {flights.map((flight, index) => (
                        <Flight 
                        key = {index} 
                        index = {index} 
                        flight = {flight}
                        removeFlight = {removeFlight}    
                        />))}
                    <ReservationForm removeFlight = {removeFlight}/>
                </div>
            </div>
        </React.Fragment>
        )
    }

export default ReservationDetail;