import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addAppointment} from '../../actions'
import AddAppointment from '../ui/AddAppointment'

class AddAppointmentContainer extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const {addAppointment} = this.props
        const {date, title, note} = e.target
        addAppointment(date.value, title.value, note.value)
    }

    render() {
        return (
            <AddAppointment handleSubmit={this.handleSubmit} />
        )
    }
}

const mapDispatchToProps = dispatch => ({

    addAppointment(date, title, note) {
        dispatch( addAppointment(date, title, note) )
    }

})

export default connect(null, mapDispatchToProps)(AddAppointmentContainer)