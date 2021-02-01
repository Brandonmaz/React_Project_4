import React, {Component} from 'react'

class FinishedEntry extends Component {
    render = () => {
        return (
            <div className="container">
                <div className="task">
                    <h4>Task: {this.props.entry.task}</h4>
                    <h4>Description: {this.props.entry.description}</h4>
                    <h4>Due Date: {this.props.entry.due_date}</h4>
                    {/* <input type="checkbox" {this.props.entry.done}/> */}
                    <button value={this.props.entry.id} onClick={this.props.deleteEntry}>Delete</button>
                    <h4>Update Entry</h4>
                </div>
            </div>
        )
    }
}

export default FinishedEntry
