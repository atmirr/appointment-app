import React, { Component } from 'react';
import './assets/styles/bootstrap.min.css'
import Header from './sections/Header'
import Main from './sections/Main'
import Appointments from './components/container/AppointmentsContainer'
import AddAppointment from './components/container/AddAppointmentContainer'
import Search from "./components/container/SearchContainer";
import Holidays from "./components/container/HolidaysContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Search/>
        <Appointments />
        <AddAppointment />
        <Holidays />
      </div>
    );
  }
}

export default App;
