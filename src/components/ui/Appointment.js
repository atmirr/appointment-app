import React from 'react'

const Appointment = ({date, title, note}) => (
    <div className="card col-sm-4">
        <div>{date}</div>
        <div>{title}</div>
        <div>{note}</div>
        <br />
    </div>
)

export default Appointment