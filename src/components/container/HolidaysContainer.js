import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchHolidays} from '../../actions'
import {get} from 'immutable'
import Holiday from '../ui/Holiday'

const HolidaysContainer = ({fetchHolidays, allHolidays}) => {

    useEffect(() => {
        fetchHolidays()
    }, [])

    console.log(allHolidays)
    return (
        <div>
            {get(allHolidays, 'holidays').map ( (item, i) =>
                <Holiday key={i} name={get(item, 'name')} country={get(item, 'country')} date={get(item, 'date')} />
            )}
        </div>
    )

}

const mapStateToProps = state => ({
    allHolidays: get(state, 'allHolidays')
})

const mapDispatchToProps = dispatch => ({
    fetchHolidays() {
        dispatch( fetchHolidays() )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HolidaysContainer)