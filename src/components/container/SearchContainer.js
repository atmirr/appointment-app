import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setQuery} from '../../actions'
import Search from '../ui/Search'

class SearchContainer extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setQuery(e.target.query.value)
    }

    render() {

        return (
            <div>
                <Search handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setQuery(query) {
        dispatch( setQuery(query) )
    }
})

export default connect(null, mapDispatchToProps)(SearchContainer)