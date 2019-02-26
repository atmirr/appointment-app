import React from 'react'

const AddAppointment = ({handleSubmit}) => (
    <div>
        <form onSubmit={handleSubmit}>

            <label htmlFor="date"/>
            <input name="date" type="date"/>

            <label htmlFor="title"/>
            <input name="title" type="text"/>

            <label htmlFor="note"/>
            <textarea name="note" />

            <button type="submit">Add</button>
        </form>
    </div>
)

export default AddAppointment