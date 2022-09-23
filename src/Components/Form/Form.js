import './Form.css'
import React from 'react'


class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            drive_time: null
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {
        return (
            <div className="form">
            <select id="drive_time" name="drive_time" value={this.state.drive_time} onChange={event => this.handleChange(event)}>
                <option value="choose-drive-time" selected>DRIVE TIME FROM DENVER</option>
                <option value="1.5">1.5 Hours or Under</option>
                <option value="3">1.5 - 3 Hours</option>
                <option value="5">4 - 5 Hours</option>
            </select>
            <button onClick={() => this.props.method(this.state.drive_time)}>SEARCH</button>
            </div>
        )
    }
}

export default Form