import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getVisibleAppointments} from '../../store/selectors'
import Appointment from '../ui/Appointment'
import {get} from 'immutable'

class AppointmentsContainer extends Component {

    render() {
        const {visibleAppointments} = this.props

        return (
            <div className="row">
                {visibleAppointments.map ( (item, i) =>
                     <Appointment key={i} date={get(item, 'date')} title={get(item, 'title')} note={get(item, 'note')} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    visibleAppointments: getVisibleAppointments(state)
})

export default connect(mapStateToProps, null)(AppointmentsContainer)