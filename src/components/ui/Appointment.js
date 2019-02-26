import React from 'react'

const Appointment = ({date, title, note}) => (
    <div>
        <div className="card">{date}</div>
        <div className="card">{title}</div>
        <div className="card">{note}</div>
        <br />
    </div>
)

export default Appointment