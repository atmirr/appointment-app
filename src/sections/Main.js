import React from 'react'
import Appointments from '../components/container/AppointmentsContainer'
import AddAppointment from '../components/container/AddAppointmentContainer'
import Search from "../components/container/SearchContainer";
import Holidays from "../components/container/HolidaysContainer";

const Main = () => (
    <div class="container">
      <Search/>
      <Appointments />
      <AddAppointment />
      <Holidays />
    </div>
)

export default Main