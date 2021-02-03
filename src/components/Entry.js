import React, {Component} from 'react'

class Entry extends Component {
    render = () => {
        return (
            <div className="container">
                <div className="task">
                    <input type="checkbox" id="check" value="checkbox"/> <label for="check">{this.props.entry.task}</label>
                </div>
                <div>
                    <details>
                        <summary>Description</summary>
                            <li>{this.props.entry.description}</li>
                            <li>Due Date: {this.props.entry.due_date}</li>
                            <button value={this.props.entry.id} onClick={this.props.deleteEntry}>Delete</button>
                    </details>
                        <details>
                            <summary>Update Entry</summary>
                            <form id={this.props.entry.id} onSubmit={this.props.updateEntry}>
                                <label htmlFor="task"></label>
                                <input
                                    placeholder="Task"
                                    type="text"
                                    id="task"
                                    onChange={this.props.handleChange}
                                    value={this.props.task}
                                />
                                <br />
                                <label htmlFor="description"></label>
                                <input
                                    placeholder="Description"
                                    type="text"
                                    id="description"
                                    onChange={this.props.handleChange}
                                    value={this.props.description}
                                />
                                <br />
                                <h5>Due Date</h5>
                                <label htmlFor="due_date"></label>
                                <input
                                    type="date"
                                    id="due_date"
                                    onChange={this.props.handleChange}
                                    value={this.props.due_date}
                                />
                                <br />
                                <input type="submit" value="Update Task"/>
                            </form>
                        </details>
                    </div>
            </div>
        )
    }
}

export default Entry
