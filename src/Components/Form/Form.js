import './Form.css'
import React from 'react'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drive_time: ''
        }
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({
            drive_time: event.target.value
        })
    }

    render() {
        return (
            <div className="form">
                    <select id="drive_time" name="drive_time" value={this.state.drive_time} onChange={event => this.handleChange(event)}>
                        <option value="choose-drive-time" selected>DRIVE TIME FROM DENVER</option>
                        <option value="0-1.5">1.5 Hours or Under</option>
                        <option value="2-3">2 - 3 Hours</option>
                        <option value="4-5">4 - 5 Hours</option>
                    </select>
                    <button className="search-button"onClick={() => this.props.filterTrips(this.state.drive_time)}>SEARCH</button>
            </div>
        )
    }
}

export default Form