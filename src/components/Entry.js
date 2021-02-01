import React, {Component} from 'react'

class Entry extends Component {
    render = () => {
        return (
            <div className="container">
                <div className="task">
                    <h4>Task: {this.props.entry.task}</h4>
                    <h4>Due Date: {this.props.entry.due_date}</h4>
                    <details >
                        <summary>More Info</summary>
                        <h4>Description: {this.props.entry.description}</h4>


                        {/* <input type="checkbox" {this.props.entry.done}/> */}
                        <button value={this.props.entry.id} onClick={this.props.deleteEntry}>Delete</button>
                        <details>
                            <summary>Update Entry</summary>
                            <form id={this.props.entry.id} onSubmit={this.props.updateEntry}>
                                <label htmlFor="task">Task</label>
                                <input
                                    type="text"
                                    id="task"
                                    onChange={this.props.handleChange}
                                    value={this.props.task}
                                />
                                <br />
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    onChange={this.props.handleChange}
                                    value={this.props.description}
                                />
                                <br />
                                <label htmlFor="duedate">Due Date</label>
                                <input
                                    type="date"
                                    id="duedate"
                                    onChange={this.props.handleChange}
                                    value={this.props.due_date}
                                />
                                <br />
                                <input type="submit" value="Update Task"/>
                            </form>
                        </details>
                    </details>
                </div>
            </div>
        )
    }
}

export default Entry
